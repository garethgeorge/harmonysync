import express from "express";
import http from "http";
import SocketIO from "socket.io";
import sync_pb from "../compiled_protos/sync";
import sesh_pb from "../compiled_protos/session";
import { RPCMediator } from "protorpcjs";
import SocketTransport from "./socket_transport";
import { version } from "./config";
import Debug from "debug";
import { pbjs } from "gulp-protobuf";
import crypto from "crypto";

const app = express();
const server = http.createServer(app);
const io = SocketIO(server);

class Room {
  public static allRooms: {[id: string]: Room} = {};

  private id: string;
  private users: User[] = [];
  private syncState = new sync_pb.SyncState({
    playing: false,
    lastSyncPosition: 0,
    lastSyncTime: 0,
    seqNo: 0,
  });

  constructor() {
    this.id = crypto
      .randomBytes(12)
      .toString("base64")
      .replace(/[\W_]+/g, "");
    Room.allRooms[this.id] = this;
  }

  /**
   * adds a new user and dispatches the appropriate events to notify
   * other users of the change
   * @param newUser
   */
  addUser(newUser: User) {
    newUser.room = this;
    this.users.push(newUser);

    // send the initial sync state to the client as a fire and forget
    newUser.syncRpcClient.setSyncState(this.syncState);

    // notify all existing users of the new user
    const newUserEvent = sesh_pb.UsersDiff.encode({
      addedUsers: [
        sesh_pb.UserInfo.create({
          id: newUser.id,
          name: newUser.name,
        }),
      ],
      droppedUsers: [],
    }).finish();

    for (const user of this.users) {
      if (user != newUser)
        user.mediator.sendEvent("update_users", newUserEvent);
    }
  }
  /**
   * removes an existing user and dispatches the proper event to notify other
   * connected clients of the change
   * @param toRemove
   */
  removeUser(toRemove: User) {
    this.users = this.users.filter((user: User) => {
      return user !== toRemove;
    });

    const removedUserEvent = sesh_pb.UsersDiff.encode({
      droppedUsers: [toRemove.id],
    }).finish();

    for (const user of this.users) {
      user.mediator.sendEvent("update_users", removedUserEvent);
    }
  }

  // TODO: address possible timeout issues here
  async setSyncState(syncState: sync_pb.SyncState, requester: User = null) {
    if (syncState.seqNo !== this.syncState.seqNo + 1) {
      throw new Error("sync state must have seqNo 1 greater than current");
    }
    this.syncState = syncState;

    // gather acks from clients
    await Promise.all(
      this.users
        .filter((user) => requester === null || user !== requester)
        .map((user) =>
          user.syncRpcClient.setSyncState(syncState).catch((e) => e)
        )
    );
  }

  /*
    Getters
  */

  size() {
    return this.users.length;
  }

  getSyncState() {
    return this.syncState;
  }

  getId() {
    return this.id;
  }

  toRoomInfo() {
    return sesh_pb.RoomInfo.create({
      id: this.id,
      userList: {
        users: this.users.map(user => {
          return sesh_pb.UserInfo.create({
            id: user.id,
            name: user.name,
          })
        })
      }
    });
  }
}

class User {
  private static nextUserId = 0;

  public id: number = User.nextUserId++;
  public name: string | null = null;

  public room: Room = null;
  public mediator: RPCMediator;
  public syncRpcClient: sync_pb.ClientSyncService;

  constructor(private socket: SocketIO.Socket) {
    this.mediator = new RPCMediator(new SocketTransport(socket));
    this.syncRpcClient = new sync_pb.ClientSyncService(
      this.mediator.makeRpcClientImpl() as any
    );

    this.mediator.on("error", console.log);
    this.socket.on("error", (message) => {
      console.log("socket error: ", message);
    });

    this.socket.on("disconnect", () => {
      if (this.room) {
        this.room.removeUser(this);
      }
    });

    this.addMethods();
  }

  isAuthed() {
    return this.name !== null;
  }

  addMethods() {
    this.mediator.addMethod(
      "auth",
      sesh_pb.UserAuthReq.decode,
      sesh_pb.UserAuthResp.encode,
      sesh_pb.UserAuthResp.verify,
      async (request) => {
        if (this.isAuthed()) {
          throw new Error("already authed");
        }

        if (request.name.length > 30 && request.name.length < 1) {
          throw new Error("name too long");
        }
        this.name = request.name;

        return {
          userInfo: {
            id: this.id,
            name: this.name,
          },
        };
      }
    );
    
    this.mediator.addMethod(
      "createRoom",
      sesh_pb.Empty.decode,
      sesh_pb.RoomInfo.encode,
      sesh_pb.RoomInfo.verify,
      async (request) => {
        if (!this.isAuthed()) throw new Error("auth required");
        if (this.room) throw new Error("already in room");

        const room = new Room();
        room.addUser(this);

        return room.toRoomInfo();
      }
    );

    this.mediator.addMethod(
      "joinRoom",
      sesh_pb.JoinRoomReq.decode,
      sesh_pb.RoomInfo.encode,
      sesh_pb.RoomInfo.verify,
      async (request) => {
        if (!this.isAuthed()) throw new Error("auth required");
        if (this.room) throw new Error("already in room")
        
        const room = Room.allRooms[request.id];
        if (!room) {
          throw new Error("room not found");
        }

        room.addUser(this);

        return room.toRoomInfo();
      }
    )

    this.mediator.addMethod(
      "getServerVersion",
      sesh_pb.Empty.decode,
      sesh_pb.ServerProtocolVersion.encode,
      sesh_pb.ServerProtocolVersion.verify,
      async (request) => {
        return {
          version: version,
        };
      }
    );

    // TODO: join room req
    // TODO: create room req
    // TODO: send message req

    this.mediator.addMethod(
      "setSyncState",
      sync_pb.SetSyncStateReq.decode,
      sync_pb.SetSyncStateResp.encode,
      sync_pb.SetSyncStateResp.verify,
      async (request) => {
        if (!this.isAuthed()) throw new Error("auth required");
        if (!this.room) throw new Error("must first join a room");
        if (!request.newSyncState) throw new Error("new sync state required");

        const newSyncState = new sync_pb.SyncState(request.newSyncState);

        if (newSyncState.seqNo !== this.room.getSyncState().seqNo + 1) {
          return {
            status: sync_pb.SetSyncStateResp.Status.REJECT,
          };
        }

        await this.room.setSyncState(newSyncState, this);

        return {
          status: sync_pb.SetSyncStateResp.Status.ACCEPT,
        };
      }
    );

    this.mediator.addMethod(
      "requestResync",
      sync_pb.RequestResyncReq.decode,
      sync_pb.Empty.encode,
      sync_pb.Empty.verify,
      async (request) => {
        if (!this.isAuthed()) {
          throw new Error("auth required");
        }
        if (!this.room) {
          throw new Error("must be in a room");
        }

        if (request.clientLatestSeqNo !== this.room.getSyncState().seqNo) {
          this.syncRpcClient.setSyncState(this.room.getSyncState());
        }
        return {}; // returns empty
      }
    );
  }
}

io.on("connection", (socket: SocketIO.Socket) => {
  console.log("client did connect");
  new User(socket);
});

server.listen(3000, () => {
  console.log("listening on port 3000");
});
