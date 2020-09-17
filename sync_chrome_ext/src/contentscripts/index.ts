import Overlay from "./sync/overlay";
import TestOverlay from "./overlays/test_overlay";
import io from "socket.io-client";
import SyncManager from "./sync/syncmanager";
import ChatOverlay from "./ui/components/chat/chatoverlay";

const overlays: [typeof Overlay] = [
  // TestOverlay,
  ChatOverlay
];


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
  const socket = io("http://localhost:3000", {
    transports: ['websocket'] // try this to start with :P 
  });

  console.log("requesting common-player-wrapper object from overlay");
  const playerWrapper = overlay.getPlayer();
  
  overlay.applyHTML();
  const syncManager = new SyncManager(socket, playerWrapper);
}