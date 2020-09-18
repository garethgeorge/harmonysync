import express from "express";
import http from "http";
import SocketIO from "socket.io";
import sync_pb from "../compiled_protos/sync";
import { RPCMediator } from "protorpcjs";
import SocketTransport from "./socket_transport";

const app = express();
const server = http.createServer(app);
const io = SocketIO(server);

let syncState = new sync_pb.SyncState({
  playing: false,
  lastSyncPosition: 0,
  lastSyncTime: 0,
  seqNo: 0,
});

/*
  TODO(gareth): finish implementing rooms
*/
class Room {
  private clients: {[clientId: string]: Client};

  constructor(private id: string) {
    this.clients = {};
  }

  addClient(client: Client) {
    
  }
}

class Client {
  private static allClients: {[clientId: string]: Client} = {};

  public mediator: RPCMediator;
  public syncRpcClient: sync_pb.ClientSyncService;

  constructor(private socket: SocketIO.Socket) {
    this.mediator = new RPCMediator(new SocketTransport(socket));
    this.syncRpcClient = new sync_pb.ClientSyncService(this.mediator.makeRpcClientImpl() as any);

    this.mediator.on("error", console.log);
    this.socket.on("error", (message) => {
      console.log("socket error: ", message);
    });
  }

  init() {    
    this.socket.on("disconnect", () => {
      delete Client.allClients[this.socket.id];
    });

    this.addMethods();

    Client.allClients[this.socket.id] = this;

    this.setSyncStateOnClient(syncState);
  }

  addMethods() {
    this.mediator.addMethod(
      "setSyncState",
      sync_pb.SetSyncStateReq.decode,
      sync_pb.SetSyncStateResp.encode,
      async (request) => {
        if (!request.newSyncState) 
          throw new Error("no newSyncState provided");
        const newSyncState = new sync_pb.SyncState(request.newSyncState);
  
        console.log("received request to set server sync state to ", newSyncState);
        if (newSyncState.seqNo === syncState.seqNo + 1) {
          console.log("\taccepted request!");
          syncState = newSyncState;
          console.log("sending out sync commands to clients");
          
          // TODO(gareth): synchronize with room
          for (const client of Object.values(Client.allClients)) {
            if (client !== this) {
              client.setSyncStateOnClient(syncState);
            }
          }

          return new sync_pb.SetSyncStateResp({
            status: sync_pb.SetSyncStateResp.Status.ACCEPT,
          });
        } else {
          console.log("\trejected request!");
          
          // send them the proper sync state, they have gotten desync'd 
          this.setSyncStateOnClient(syncState);

          return new sync_pb.SetSyncStateResp({
            status: sync_pb.SetSyncStateResp.Status.REJECT,
          });
        }
      }
    );

    this.mediator.addMethod("requestResync", sync_pb.RequestResyncReq.decode, sync_pb.Empty.encode, async (request) => {
      if (request.clientLatestSeqNo !== syncState.seqNo) {
        this.setSyncStateOnClient(syncState);
      }
      return {}; // returns empty
    });
  }

  setSyncStateOnClient(syncState) {
    console.log("sending syncState to client: ", syncState)
    return this.syncRpcClient.setSyncState(syncState);
  }

  get id() {
    return this.socket.id;
  }
}

io.on("connection", (socket: SocketIO.Socket) => {
  console.log("client did connect");
  new Client(socket).init();
});

server.listen(3000, () => {
  console.log("listening on port 3000");
});
