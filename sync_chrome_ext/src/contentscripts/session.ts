import { RPCMediator } from "protorpcjs";
import * as sesh_pb from "../../compiled_protos/session";
import Debug from "debug";
import { version } from "./config";
import EventEmitter from "eventemitter3";

const debug = Debug("harmonysync:session");

class Room extends EventEmitter {
  private id: string;
  private users: sesh_pb.IUserInfo[];

  constructor(roomInfo: sesh_pb.RoomInfo, private mediator: RPCMediator) {
    super();
    this.id = roomInfo.id;
    this.users = roomInfo.userList.users;

    this.mediator.onEvent(
      "update_users",
      sesh_pb.UsersDiff.decode,
      (userList) => {
        // add the new users to the user list
        this.users.push(...userList.addedUsers);

        // remove dropped users if there are any 
        if (userList.droppedUsers.length > 0) {
          const droppedIds = {};
          for (const userId of userList.droppedUsers) {
            droppedIds[userId] = true;
          }
          this.users = this.users.filter((user) => !droppedIds[user.id]);
        }

        this.emit("updated_users", this.users);
      }
    );
  }

  getId() {
    return this.id;
  }

  getUserById(id: number) {
    for (const user of this.users) {
      if (user.id === id)
        return user;
    }
  }

  getUsers() {
    return this.users;
  }
}

export class SessionManager {
  private room: Room;
  private seshService: sesh_pb.SessionService;

  constructor(private mediator: RPCMediator) {
    this.seshService = sesh_pb.SessionService.create(
      mediator.makeRpcClientImpl()
    );
  }

  async checkServerVersion() {
    const versionInfo = await this.seshService.getServerVersion({});
    if (versionInfo.version !== version) {
      alert(
        "version mismatch... server is on version: " +
          versionInfo.version +
          " but you are still running " +
          version +
          ".\nPlease update your sync chrome extension or things may not work as expected."
      );
    }
  }

  async connect(name: string) {
    const resp = await this.seshService.auth({ name });
    debug("authenticated user as: %o", resp);
    return resp;
  }

  async createRoom() {
    const resp = await this.seshService.createRoom({});
    this.room = new Room(new sesh_pb.RoomInfo(resp), this.mediator);
    return this.room;
  }

  async joinRoom(id: string) {
    const info = await this.seshService.joinRoom({ id });
    this.room = new Room(new sesh_pb.RoomInfo(info), this.mediator);
    return this.room;
  }

  getRoom() {
    return this.room;
  }
}
