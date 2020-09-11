import { stripWhiteSpace } from "../util";
import BaseOverlay from "../sync/overlay";

export default class TestOverlay extends BaseOverlay {
  canHandlePage() {
    return this.window.document.title === "HarmonySyncTest" && !!this.findVideoPlayer();
  }

  name() {
    return "test";
  }
}
