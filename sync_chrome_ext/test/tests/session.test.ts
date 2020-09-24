import { expect } from "chai";
import SocketIOClient from "socket.io-client";
import SyncManager, {
  areStatesClose,
} from "../../src/contentscripts/sync/syncmanager";
import { RPCMediator } from "protorpcjs";
import SocketTransport from "../../src/contentscripts/transports/socket_transport";
import MockPlayer from "../mocks/mock_player";
import { Player } from "../../src/contentscripts/sync/player";

describe("sync manager", () => {
  
});
