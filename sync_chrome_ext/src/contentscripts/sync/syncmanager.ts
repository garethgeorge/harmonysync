import * as AsyncLock from "async-lock";
import * as sync_pb from "../../../compiled_protos/sync";
import { sleep } from "../util";
import { Player } from "./player";
import { RPCMediator } from "protorpcjs";

const getTimeSeconds = () => {
  return new Date().getTime() / 1000.0;
}

const stateGetPosition = (state: sync_pb.SyncState) => {
  if (state.playing) {
    return state.lastSyncPosition + getTimeSeconds() - state.lastSyncTime;
  } else return state.lastSyncPosition;
};

const areStatesClose = (a: sync_pb.SyncState, b: sync_pb.SyncState) => {
  // does the playback state differ?
  if (a.playing !== b.playing) {
    return false;
  }
  // are they off by more than half a second?
  if (Math.abs(stateGetPosition(a) - stateGetPosition(b)) > 1) {
    return false;
  }
  return true;
};

export default class SyncManager {
  private syncRpcClient: sync_pb.ServerSyncService;
  private serverSyncState?: sync_pb.SyncState;

  private lock: AsyncLock;
  private clientSynchronizingWithServer: boolean;

  constructor(private rpcMediator: RPCMediator, private player: Player) {
    this.serverSyncState = null;
    this.syncRpcClient = new sync_pb.ServerSyncService(rpcMediator.makeRpcClientImpl());

    this.rpcMediator.on("error", console.log);

    this.lock = new AsyncLock();
    this.subscribeEvents();
  }

  subscribeEvents() {
    this.player.setStateChangeCallback(() => {
      this.trySubmitSyncState();
    });

    console.log("subscribing to events...");
    this.rpcMediator.addMethod("setSyncState", sync_pb.SyncState.decode, sync_pb.Empty.encode, async (syncState) => {
      console.log("got new SyncState from server: ", syncState);
      this.serverSyncState = sync_pb.SyncState.create(syncState);
      console.log("set local sync state to: ", this.serverSyncState);
      await this.applyServerSyncState().then(() => {
        console.log("applied sync state");
      });

      console.log("sending back sync_pb.Empty() to server to indicate we completed");

      return new sync_pb.Empty({});
    });

  }

  async requestResync() {
    // this.socket.emit("ResyncReq");
    throw new Error("requestResync not implemented");
  }

  canSubmitSyncState(): boolean {
    if (!this.serverSyncState) {
      return false;
    }
    const newState = this.computePlayerSyncState();
    if (this.clientSynchronizingWithServer || areStatesClose(newState, this.serverSyncState)) {
      return false;
    }
    return true;
  }

  async trySubmitSyncState() {
    if (!this.canSubmitSyncState()) {
      console.log("syncstate should not be submitted -- we are out of sync");
      return;
    }

    await sleep(100);
    await this.lock.acquire("sync", async () => {
      const newState = this.computePlayerSyncState();
      if (!this.canSubmitSyncState()) {
        console.log("syncstate should not be submitted -- we are out of sync");
        return;
      }

      console.log(
        "client submitting local sync state to server with seqno: " + newState.seqNo
      );

      const resp = await this.syncRpcClient.setSyncState({
        newSyncState: newState
      });
      
      console.log("set sync state response: ", resp);

      if (resp.status == sync_pb.SetSyncStateResp.Status.ACCEPT) {
        console.log("server accepted client's syncstate");
        this.serverSyncState = newState;
      } else {
        console.log("server rejected client's syncstate -- we are out of sync");
        this.serverSyncState = null;
        // this.requestResync();
      }
    });
  }

  computePlayerSyncState() {
    return new sync_pb.SyncState({
      seqNo: this.serverSyncState ? this.serverSyncState.seqNo + 1 : -1,
      playing: this.player.isPlaying(),
      lastSyncTime: getTimeSeconds(),
      lastSyncPosition: this.player.getPlaybackPosition(),
    });
  }

  async applyServerSyncState() {
    await this.lock.acquire("sync", async () => {
      if (this.serverSyncState === null) {
        throw new Error("can not synchronize with null state");
      }

      this.clientSynchronizingWithServer = true;
      console.log(
        "starting synchronizing with latest server syncstate: " + this.serverSyncState.seqNo
      );
      const desiredState = this.serverSyncState;
      while (
        desiredState == this.serverSyncState &&
        !areStatesClose(this.computePlayerSyncState(), desiredState)
      ) {
        console.log(
          "calling player setState: (playing = " +
            this.serverSyncState.playing +
            ", position = " +
            stateGetPosition(this.serverSyncState) +
            ")"
        );
        this.player.setState(
          this.serverSyncState.playing,
          stateGetPosition(this.serverSyncState)
        );
        do {
          await sleep(100);
        } while (desiredState == this.serverSyncState && this.player.isBuffering());
      }
      this.clientSynchronizingWithServer = false;
      console.log(
        "done synchronizing with latest server syncstate: " + this.serverSyncState.seqNo
      );
    });
  }
}
