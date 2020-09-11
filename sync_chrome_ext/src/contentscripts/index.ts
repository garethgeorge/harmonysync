import Overlay from "./overlay";
import * as SocketIOClient from "socket.io-client";

import TestOverlay from "./overlays/test_overlay";
import io from "socket.io-client";

const overlays: [Function] = [
  TestOverlay
];


let overlay: Overlay = null;
for (const overlayCtor of overlays) {
  overlay = overlayCtor(window) as Overlay;
  if (overlay.canHandlePage()) {
    break;
  }
}

if (overlay != null) {
  console.log("found " + overlay.name() + " can handle page");
  const socket = io("http://localhost:3000", {
    transports: ['websocket'] // try this to start with :P 
  });
  overlay.startSyncing(socket);
}