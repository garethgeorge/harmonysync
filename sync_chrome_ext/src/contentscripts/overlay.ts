import {Player, BasicWebVideoPlayer} from "./sync/player";


export default interface Overlay {
  constructor(window: Window);
  canHandlePage(): boolean;
  name(): string;
  getPlayer(): Player;
  applyUI(): void;
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

  getPlayer() {
    const mediaElement = this.findVideoPlayer();
    if (!mediaElement) {
      throw new Error("could not find the HTML video player object");
    }
    return new BasicWebVideoPlayer(mediaElement)
  }

  applyUI(): void {
    // noop
  }

  //
  // Helper Methods for internal interface
  //
  protected findVideoPlayer(): HTMLMediaElement | null {
    const videoPlayer = this.window.document.querySelector("video");
    if (!videoPlayer)
      return null;
    return videoPlayer as HTMLMediaElement;
  }

  protected findVideoPlayerContainer(): HTMLElement | null {
    const player = this.findVideoPlayer();
    if (!player)
      return null;
    return player.parentElement;
  }
}