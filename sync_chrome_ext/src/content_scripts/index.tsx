import Overlay from "./overlay";
import TestOverlay from "./overlays/test_overlay";
import SocketIOClient from "socket.io-client";
import SyncManager from "./sync/syncmanager";
import { RPCMediator } from "protorpcjs";
import SocketTransport from "../common/lib/transports/socket_transport";
import { SessionManager } from "./session";
import React from "react";
import ReactDOM from "react-dom";
import PopupView from "./views/popup_view";
import Button from "@material-ui/core/Button";

console.log("[content script] loading content script!");

const presentError = (message) => {
  const ErrorDialogue = () => {
    const [open, setOpen] = React.useState(true);

    return (
      <PopupView
        isOpen={open}
        onClose={setOpen.bind(null, false)}
        title={"Error"}
        message={message}
        buttons={[]}
      />
    );
  };

  // inject our HTML
  const newDiv = document.createElement("div");
  document.body.appendChild(newDiv);
  ReactDOM.render(<ErrorDialogue />, newDiv);
}

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

  // inject our HTML
  const newDiv = document.createElement("div");
  document.body.appendChild(newDiv);

  const createLobby = async () => {
    const connectionInfo = connect();
    if (!connectionInfo) {
      return presentError("Failed to find a video element / initialize connection.");
    }

    const { syncManager, sessionManager } = connectionInfo;
    try {
      await sessionManager.createRoom();
    } catch (e) {
      presentError("Failed to create room.");
      throw e;
    }
  };

  const CreateLobbyView = () => {
    const [open, setOpen] = React.useState(true);

    return (
      <PopupView
        isOpen={open}
        onClose={setOpen.bind(null, false)}
        title={"CREATE LOBBY"}
        message={"Would you like to create a lobby on this page?"}
        buttons={[
          <Button onClick={createLobby} color="primary">
            Create
          </Button>,
        ]}
      />
    );
  };

  ReactDOM.render(<CreateLobbyView />, newDiv);
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

  // inject our HTML
  const newDiv = document.createElement("div");
  document.body.appendChild(newDiv);

  let isOpen = true;
  ReactDOM.render(
    <PopupView
      isOpen={isOpen}
      onClose={() => {
        isOpen = false;
      }}
      title={"CREATE LOBBY"}
      message={"Would you like to create a lobby on this page?"}
      buttons={[]}
    />,
    newDiv
  );
};

const connect = () => {
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
    return {
      syncManager,
      sessionManager,
    };
  }
  return null;
};
