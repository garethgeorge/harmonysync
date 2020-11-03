import { Player } from "../../src/content_scripts/sync/player";

export default class MockPlayer implements Player {
  private position: number = 0;
  private playing: boolean = false;
  private buffering: boolean = false;
  private callbacks: (() => void)[] = [];
  private bufferingTimeout: any = null;

  /**
   * Constructs a MockPlayer instance
   * @param bufferTimeMs simulated buffering time in milliseconds
   */
  constructor(private bufferTimeMs: number) {}

  getPlaybackPosition(): number {
    return this.position;
  }

  isPlaying(): boolean {
    return this.playing;
  }

  isBuffering(): boolean {
    return this.buffering;
  }

  setState(playing: boolean, position: number): void {
    // simulate buffering
    if (this.position !== position) {
      this.buffering = true;

      if (this.bufferingTimeout) {
        clearTimeout(this.bufferingTimeout);
      }
      this.bufferingTimeout = setTimeout(() => {
        this.buffering = false;
      }, this.bufferTimeMs);
    }

    // update the state
    this.playing = playing;
    this.position = position;

    setImmediate(() => {
      for (const callback of this.callbacks) {
        callback();
      }
    });
  }

  addStateChangeCallback(callback: () => void): void {
    this.callbacks.push(callback);
  }

  getPosition() {
    return this.position;
  }
}
