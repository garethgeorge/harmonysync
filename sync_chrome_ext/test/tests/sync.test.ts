import { expect } from "chai";
import SocketIOClient from "socket.io-client";
import SyncManager, {
  areStatesClose,
} from "../../src/content_scripts/sync/syncmanager";
import MockPlayer from "../mocks/mock_player";
import { createMockUser, MockUser } from "../mocks/mock_user";

describe("sync manager", () => {
  for (const delay of [0, 10]) {
    describe("with " + delay + "ms of delay", () => {
      let user: MockUser;

      beforeEach(() => {
        user = createMockUser(new MockPlayer(delay));
      });

      afterEach(() => {
        return new Promise((accept) => {
          setTimeout(() => {
            user.socket.disconnect();
            accept();
          }, 100);
        });
      });

      it("should first receive initial sync state from server", async () => {
        await user.sessionManager.connect("user1");
        const room = await user.sessionManager.createRoom();

        // first we should get the sync state from the server
        let receivedSyncState;
        user.syncManager.once("serverSetSyncState", (syncState) => {
          expect(syncState).to.exist;
          expect(user.syncManager.getDesiredSyncState()).to.deep.equal(syncState);
          receivedSyncState = syncState;
        });

        user.syncManager.on("trySubmitSyncState", () => {
          throw new Error("badness");
        });

        await new Promise((accept) => {
          user.syncManager.once("appliedSyncState", () => {
            expect(
              areStatesClose(
                user.syncManager.computePlayerSyncState(),
                receivedSyncState
              )
            ).to.be.true;
            accept();
          });
        });
      });
    });
  }

  // TODO: add test config with multiple clients connected, second client should receive sync state update
  // when first client submits a new sync state
});
