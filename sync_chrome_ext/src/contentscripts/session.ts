import { RPCMediator } from "protorpcjs";
import * as sesh_pb from "../../compiled_protos/session";
import Debug from "debug";
import { version } from "./config";

const debug = Debug("harmonysync:session");

class Room {
  private id: string;

  constructor(roomInfo: sesh_pb.RoomInfo, private mediator: RPCMediator) {
    this.id = roomInfo.id;
  }

  getId() {
    return this.id;
  }

  async getUserById(id: number) {
    
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
  }

  async joinRoom(id: number, password: string) {
    const resp = await this.seshService.joinRoom({ id, password });
    if (resp.status === "error") {
      throw new Error("failed to join room");
    } else if (resp.status === "roomInfo") {
      this.room = new Room(new sesh_pb.RoomInfo(resp.roomInfo), this.mediator);
    } else
      throw new Error("unhandled status returned by joinRoom: " + resp.status);
  }
}
