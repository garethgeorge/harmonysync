import SocketIOClient from "socket.io-client";
import SyncManager, {
  areStatesClose,
} from "../../src/contentscripts/sync/syncmanager";
import { RPCMediator } from "protorpcjs";
import SocketTransport from "../../src/contentscripts/transports/socket_transport";
import { SessionManager } from "../../src/contentscripts/session";
import { Player } from "../../src/contentscripts/sync/player";

export interface MockUser {
  socket: SocketIOClient.Socket | null;
  sessionManager: SessionManager | null;
  player: Player | null;
  syncManager: SyncManager | null;
}

export const createMockUser = (player: Player | null = null): MockUser => {
  const socket = SocketIOClient("http://localhost:3000", {
    transports: ["websocket"], // try this to start with :P
  });

  const transport = new SocketTransport(socket);
  const mediator = new RPCMediator(transport);
  const sessionManager = new SessionManager(mediator);

  if (player) {
    const syncManager = new SyncManager(mediator, player);
    return {
      socket,
      sessionManager,
      player,
      syncManager,
    }
  }

  return {
    socket,
    sessionManager,
    player: null, 
    syncManager: null
  };
};
