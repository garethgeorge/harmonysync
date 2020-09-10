import { stripWhiteSpace } from "../util";

export default class TwistSyncOverlay {
  private window: Window;
  constructor(window: Window) {
    this.window = window;
  }

  getAnimeInfo() {
    const titleDiv = document.getElementsByClassName("series-title").item(0);
    const episodeDiv = document.getElementsByClassName("series-episode").item(0);

    if (!titleDiv || !episodeDiv) throw new Error("title or episode info not found");

    return {
      seriesName: stripWhiteSpace(titleDiv.textContent),
      episode: stripWhiteSpace(episodeDiv.textContent),
    };
  }
}
