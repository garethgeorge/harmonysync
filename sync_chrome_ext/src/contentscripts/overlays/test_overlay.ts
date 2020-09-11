import { stripWhiteSpace } from "../util";
import BaseOverlay from "../overlay";

export default class TestOverlay extends BaseOverlay {
  canHandlePage() {
    return this.window.document.title === "HarmonySyncTest";
  }

  startSync() {
    
  }

  name() {
    return "test";
  }
}
