import * as sync_pb from "../../../build/protos/sync_pb";
import * as AsyncLock from "async-lock";
import * as rpcClient from "../rpc_util";
import { sleep } from "../util";
import { Player } from "./player";

const stateGetPosition = (state: sync_pb.SyncState) => {
  if (state.getPlaying()) {
    return state.getLastSyncPosition() + (state.getLastSyncTime() - new Date().getTime()) / 1000;
  } else return state.getLastSyncPosition();
};

const areStatesClose = (a: sync_pb.SyncState, b: sync_pb.SyncState) => {
  // does the playback state differ?
  if (a.getPlaying() != b.getPlaying()) {
    return false;
  }
  // are they off by more than half a second?
  if (Math.abs(stateGetPosition(a) - stateGetPosition(b)) > 0.5) {
    return false;
  }
  return true;
};

export default class SyncManager {
  private player: Player;
  private socket: SocketIOClient.Socket;
  private serverSyncState?: sync_pb.SyncState;

  private lock: AsyncLock;
  private clientSynchronizingWithServer: boolean;

  constructor(socket: SocketIOClient.Socket, player: Player) {
    this.player = player;
    this.socket = socket;
    this.serverSyncState = null;

    this.lock = new AsyncLock();
    this.subscribeEvents();
  }

  subscribeEvents() {
    // update our sync state
    this.socket.on("SyncState", (data) => {
      const syncState = rpcClient.decodeResponse(data as Uint8Array, sync_pb.SyncState)
        .response as sync_pb.SyncState;
      this.serverSyncState = syncState;
      this.applyServerSyncState().then(() => {
        console.log("applied sync state");
      });

      this.player.setStateChangeCallback(() => {
        this.trySubmitSyncState();
      });
    });
  }

  async requestResync() {
    const req = new sync_pb.ResyncReq();
    req.setSeqNo(this.serverSyncState.getSeqNo());

    this.socket.emit("RequestResync", rpcClient.packageRequest(req).serializeBinary());
  }

  async trySubmitSyncState() {
    const newState = this.computePlayerSyncState();
    if (
      this.clientSynchronizingWithServer ||
      areStatesClose(newState, this.serverSyncState)
    ) {
      console.log(
        "not submitting possible state change -- we are already synchronizing OR the states are too similar"
      );
      return;
    }

    console.log("client submitting local sync state to server with seqno: " + newState.getSeqNo());
    const req = new sync_pb.SetSyncStateReq();
    req.setNewSyncState(newState);
    const resp = (await rpcClient.rpcInvoke(
      this.socket,
      "SetSyncState",
      req,
      sync_pb.SetSyncStateResp
    )) as sync_pb.SetSyncStateResp;

    // TODO: examine this logic carefully
    if (resp.getStatus() == sync_pb.SetSyncStateResp.Status.ACCEPT) {
      console.log("server accepted client's syncstate");
      this.serverSyncState = newState;
    } else {
      console.log("server rejected client's syncstate -- we are out of sync");
      this.serverSyncState = null;
    }
  }

  computePlayerSyncState() {
    if (!this.serverSyncState) {
      throw new Error("can not set syncstate before receiving first sync from server");
    }

    const newSyncState = new sync_pb.SyncState();
    newSyncState.setSeqNo(this.serverSyncState.getSeqNo());
    newSyncState.setPlaying(this.player.isPlaying());
    newSyncState.setLastSyncPosition(this.player.getPlaybackPosition());
    newSyncState.setLastSyncTime(new Date().getTime());
    newSyncState.setPlaying(this.player.isPlaying());
    return newSyncState;
  }

  async applyServerSyncState() {
    if (this.serverSyncState == null) {
      throw new Error("can not synchronize with null state");
    }

    this.clientSynchronizingWithServer = true;
    const desiredState = this.serverSyncState;
    while (
      desiredState == this.serverSyncState &&
      !areStatesClose(this.computePlayerSyncState(), desiredState)
    ) {
      this.player.setState(
        this.serverSyncState.getPlaying(),
        stateGetPosition(this.serverSyncState)
      );
      do {
        await sleep(100);
      } while (desiredState == this.serverSyncState && this.player.isBuffering());
    }
    this.clientSynchronizingWithServer = false;
  }
}
