export interface Player {
  getPlaybackPosition(): number;
  isPlaying(): boolean;
  isBuffering(): boolean;

  setState(playing: boolean, position: number): void;
  setStateChangeCallback(callback: any): void;
}

export class BasicWebVideoPlayer implements Player {
  protected video: HTMLMediaElement;
  protected buffering: boolean;
  constructor(video: HTMLMediaElement) {
    this.video = video;
    this.buffering = true;

    this.video.addEventListener("waiting", () => {
      this.buffering = true;
    });
    this.video.addEventListener("playing", () => {
      this.buffering = false;
    });
  }

  getPlaybackPosition() {
    return this.video.currentTime;
  }

  isPlaying() {
    return !this.video.paused;
  }

  isBuffering() {
    return this.buffering;
  }

  setState(playing: boolean, position: number) {
    if (playing != this.isPlaying()) {
      if (playing) {
        this.video.play();
      } else {
        this.video.pause();
      }
    }

    this.video.currentTime = position;
  }

  setStateChangeCallback(callback) {
    this.video.addEventListener("seeked", callback);
    this.video.addEventListener("play", callback);
    this.video.addEventListener("pause", callback);
  }
}
