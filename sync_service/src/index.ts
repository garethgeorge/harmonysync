import * as express from "express";
import * as http from "http";
import * as socketIo from "socket.io";
import * as rpcUtil from "./rpc_util";
import * as sync_pb from "../build/protos/sync_pb";
import * as jspb from "google-protobuf";

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let syncState = new sync_pb.SyncState();
syncState.setPlaying(false);
syncState.setLastSyncTime(new Date().getTime());
syncState.setLastSyncPosition(0);
syncState.setSeqNo(0);

io.on("connection", socket => {
  socket.emit("SyncState", rpcUtil.packageResponse(syncState));
  rpcUtil.attachRpcHandler(socket, "SetSyncState", sync_pb.SetSyncStateReq, (data: jspb.Message) => {
    const req = data as sync_pb.SetSyncStateReq;
    const newSyncState = req.getNewSyncState();
    console.log("received request to set server sync state to ", newSyncState);
    if (newSyncState.getSeqNo() === syncState.getSeqNo() + 1) {
      console.log("\taccepted request!");
      syncState = newSyncState;
      const resp = new sync_pb.SetSyncStateResp();
      resp.setStatus(sync_pb.SetSyncStateResp.Status.ACCEPT);
      return resp;
    } else {
      console.log("\trejected request!");
      const resp = new sync_pb.SetSyncStateResp();
      resp.setStatus(sync_pb.SetSyncStateResp.Status.REJECT);
      return resp;
    }
  });
})

server.listen(3000, () => {
  console.log("listening on port 3000");
})