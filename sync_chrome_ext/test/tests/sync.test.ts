import { expect } from "chai";
import SocketIOClient from "socket.io-client";
import SyncManager, {
  areStatesClose,
} from "../../src/contentscripts/sync/syncmanager";
import { RPCMediator } from "protorpcjs";
import SocketTransport from "../../src/contentscripts/transports/socket_transport";
import MockPlayer from "../mocks/mock_player";
import { Player } from "../../src/contentscripts/sync/player";

describe("sync manager", () => {
  for (const delay of [0, 10]) {
    describe("with " + delay + "ms of delay", () => {
      let socket: SocketIOClient.Socket | null = null;
      let syncManager: SyncManager = null;
      let player: Player = null;

      beforeEach(() => {
        socket = SocketIOClient("http://localhost:3000", {
          transports: ["websocket"], // try this to start with :P
        });

        const transport = new SocketTransport(socket);
        const mediator = new RPCMediator(transport);
        player = new MockPlayer(500);
        syncManager = new SyncManager(mediator, player);
      });

      afterEach(() => {
        setTimeout(() => {
          socket.disconnect();
        }, 100);
      });

      it("should first receive initial sync state from server", (callback) => {
        // first we should get the sync state from the server
        let receivedSyncState;
        syncManager.once("serverSetSyncState", (syncState) => {
          expect(syncState).to.exist;
          expect(syncManager.getDesiredSyncState()).to.deep.equal(syncState);
          receivedSyncState = syncState;
        });

        syncManager.once("appliedSyncState", () => {
          expect(
            areStatesClose(syncManager.computePlayerSyncState(), receivedSyncState)
          ).to.be.true;
          callback();
        });

        syncManager.on("trySubmitSyncState", () => {
          throw new Error("badness");
        });
      });

      // TODO: add test of setting sync state
      it("should first receive initial sync state from server", (callback) => {
        // let recievedSyncState;
        syncManager.once("appliedSyncState", () => {
          // set state to likee 50
          // action phase

          // validation phase
          let trySubmitSyncStateBool = false;
          syncManager.on("trySubmitSyncState", () => {
            //make boolean try to
            trySubmitSyncStateBool = true;
          });
          //expect boolean changed tto ttrue and get the callback
          //properly check thte sync state
          syncManager.on("triedToSubmitSyncState", (syncState) => {
            expect(trySubmitSyncStateBool).to.be.true;
            expect(syncState).to.not.be.null;
            callback();
          });

          player.setState(true, 2);
          // once this event is received for the first time we have received initial sync
          // it is now okay to set a new sync state and wait for events
        });
      });
      
    });
  }

  // TODO: add test config with multiple clients connected, second client should receive sync state update
  // when first client submits a new sync state
});
