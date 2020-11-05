import Overlay from "./overlay";
import TestOverlay from "./overlays/test_overlay";
import SocketIOClient from "socket.io-client";
import SyncManager from "./sync/syncmanager";
import { RPCMediator } from "protorpcjs";
import SocketTransport from "../common/lib/transports/socket_transport";
import { SessionManager } from "./session";

console.log("[content script] loading content script!");


(window as any).createLobby = () => {
  console.log("creating lobby");

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("chrome.runtime.onMessage got message: ", request);
    if (request.message === "getSyncStatus") {
      console.log("getSyncStatus request");
      sendResponse({
        injected: true,
        mode: "createLobby",
      });
    }
  });
};

(window as any).joinLobby = () => {
  console.log("joining lobby");

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("chrome.runtime.onMessage got message: ", request);
    if (request.message === "getSyncStatus") {
      console.log("getSyncStatus request");
      sendResponse({
        injected: true,
        mode: "joinLobby",
      });
    }
  });
};


setTimeout(() => {
  const overlays: [typeof Overlay] = [TestOverlay];

  let overlay: Overlay = null;
  for (const overlayCtor of overlays) {
    overlay = new overlayCtor(window) as Overlay;
    if (overlay.canHandlePage()) {
      break;
    }
  }

  if (overlay != null) {
    console.log("found " + overlay.name() + " can handle page");

    console.log("establishing websocket connection");
    const socket = SocketIOClient("http://localhost:3000", {
      transports: ["websocket"], // try this to start with :P
    });

    const transport = new SocketTransport(socket);
    const mediator = new RPCMediator(transport);

    console.log("requesting common-player-wrapper object from overlay");
    const playerWrapper = overlay.getPlayer();

    console.log("constructing the sync manager");
    const syncManager = new SyncManager(mediator, playerWrapper);
    const sessionManager = new SessionManager(mediator);
  }
}, 100 * 10000);
