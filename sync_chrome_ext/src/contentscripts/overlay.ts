import io from "socket.io-client";

export default interface Overlay {
  constructor(window: Window);
  canHandlePage(): boolean;
  name(): string;
  startSyncing(socket: io.Socket): void;
}

export default class BaseOverlay implements Overlay {
  protected window: Window;
  constructor(window: Window) {
    this.window = window;
  }
  
  canHandlePage() {
    return false;
  }

  name() {
    return "BASE OVERLAY";
  }

  startSyncing(socket: io.Socket) {
  }

  findVideoPlayer(): HTMLElement {
    const videoPlayer = this.window.document.querySelector("video");
    if (!videoPlayer)
      return null;
    return videoPlayer;
  }
}