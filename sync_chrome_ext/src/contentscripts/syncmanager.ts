import sync_pb from "../../build/protos/sync_pb";
import io from "socket.io-client";
import AsyncLock from "async-lock";

interface Player {
  getPlaybackPosition(): number;
  isPlaying(): boolean;
  isSeeking(): boolean;
  isBuffering(): boolean;

  setState(playing: boolean, position: number): void;
}

const getStatus = (message: any) => {
  const data = message as Uint8Array;
  return sync_pb.Status.deserializeBinary(data);
}

const checkStatus = (message: any) => {
  const status = getStatus(message);
  if (status.getStatus() !== sync_pb.Status.StatusCode.OK) {
    throw new Error(status.getErrorMessage());
  }
}

class SyncManager {
  private player: Player;
  private socket: SocketIOClient.Socket;
  private lobbyInfo: sync_pb.LobbyInfo;
  private clientSyncState: sync_pb.SyncState;
  private serverSyncState?: sync_pb.SyncState;

  private lock: AsyncLock;

  constructor(lobbyInfo: sync_pb.LobbyInfo, socket: SocketIOClient.Socket, player: Player) {
    this.player = player;
    this.socket = socket;
    this.lobbyInfo = lobbyInfo;
    this.clientSyncState = new sync_pb.SyncState();
    this.clientSyncState.setSeqNo(-1);
    this.serverSyncState = null;

    this.lock = new AsyncLock();

    this.subscribeEvents(socket);
  }

  subscribeEvents(socket: SocketIOClient.Socket) {
    if (socket != this.socket) 
      throw new Error("can not attach to a different socket");
    
    // update our sync state 
    this.socket.on("SyncState", (status, message) => {
      checkStatus(status);

      const data = message as Uint8Array;
      const serverSyncState = sync_pb.SyncState.deserializeBinary(data);
      this.serverSyncState = serverSyncState;

      // TODO: schedule applying the sync state
    });
  }

  async requestResync() {
    const req = new sync_pb.ResyncRequest();
    req.setSeqNo(this.serverSyncState.getSeqNo());
    this.socket.emit("ResyncRequest", req);
  }

  async submitSyncState() {
    // TODO: determine how updating sync state should work... 
    const resp = await this.lock.acquire("submit_sync_state", () => {
      return new Promise((accept, reject) => {
        const req = new sync_pb.SetSyncStateRequest()
        req.setNewSyncState(this.clientSyncState);
        this.socket.emit("SetSyncStateRequest", req.serializeBinary());
        this.socket.once("SetSyncStateResponse", (status, message) => {
          try {
            checkStatus(status);

            const data = message as Uint8Array;
            const resp = sync_pb.SetSyncStateResponse.deserializeBinary(data);
            accept(resp);
          } catch (e) {
            reject(e);
          }
        });
      });
    }) as sync_pb.SetSyncStateResponse;

    if (resp.getStatus() == sync_pb.SetSyncStateResponse.Status.ACCEPT) {
      // TODO: further refine the sync protocol and what it means... perhaps even draw an *mind blown* diagram
      this.serverSyncState = this.clientSyncState;
    }

    return resp;
  }
}