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

const mediators: { [socketId: string]: RPCMediator } = {};
const synchronizeClients = () => {
  return Promise.all(Object.values(mediators).map(async (mediator) => {
    const syncRpcClient = new sync_pb.ClientSyncService(mediator.makeRpcClientImpl() as any);
    try {
      return await syncRpcClient.setSyncState(syncState);
    } catch (e) {
      return null;
    }
  }));
};

io.on("connection", (socket: SocketIO.Socket) => {
  console.log("client did connect");
  socket.on("disconnect", () => {
    delete mediators[socket.id];
  });

  socket.on("error", (message) => {
    console.log("socket error: ", message);
  });

  const rpcMediator = new RPCMediator(new SocketTransport(socket));
  rpcMediator.on("error", console.log);
  
  mediators[socket.id] = rpcMediator;

  rpcMediator.addMethod(
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
        synchronizeClients().then(() => {
          console.log("all clients are synchronized");
        });
        return new sync_pb.SetSyncStateResp({
          status: sync_pb.SetSyncStateResp.Status.ACCEPT,
        });
      } else {
        console.log("\trejected request!");
        return new sync_pb.SetSyncStateResp({
          status: sync_pb.SetSyncStateResp.Status.ACCEPT,
        });
      }
    }
  );

  const syncRpcClient = new sync_pb.ClientSyncService(rpcMediator.makeRpcClientImpl() as any);
  console.log("sending sync state to client");
  syncRpcClient.setSyncState(syncState).then(() => {
    console.log("client ack'd the sync state we sent");
  })
});

server.listen(3000, () => {
  console.log("listening on port 3000");
});
