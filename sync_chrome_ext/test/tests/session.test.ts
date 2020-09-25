import chaiAsPromised from "chai-as-promised";
import chai, { expect } from "chai";
import { createMockUser, MockUser } from "../mocks/mock_user";

chai.use(chaiAsPromised);

describe("session manager", () => {
  let mock1: MockUser;
  let mock2: MockUser;

  beforeEach(() => {
    mock1 = createMockUser();
    mock2 = createMockUser();
  });

  afterEach(() => {
    return new Promise((accept) => {
      setTimeout(() => {
        mock1.socket.disconnect();
        mock2.socket.disconnect();
        accept();
      }, 100);
    });
  });

  it("should find server matches client's version", async () => {
    await mock1.sessionManager.checkServerVersion();
  });

  it("should let user auth with username of choice", async () => {
    const resp = await mock1.sessionManager.connect("testUser");
    expect(resp.userInfo.name).to.equal("testUser");
  });

  it("should not let user auth twice", async () => {
    const resp = await mock1.sessionManager.connect("testUser");
    await expect(mock1.sessionManager.connect("testUser")).to.eventually.be
      .rejected;
  });

  it("should let authed user create a room", async () => {
    await mock1.sessionManager.connect("testUser");
    const room = await mock1.sessionManager.createRoom();
    expect(room.getId()).to.have.length.greaterThan(6);
    expect(room.getUsers()).to.have.length(1);
  });

  it("should not let a user create a room twice", async () => {
    await mock1.sessionManager.connect("testUser");
    const room = await mock1.sessionManager.createRoom();
    expect(mock1.sessionManager.createRoom()).to.eventually.be.rejected;
  });

  it("should let authed user join a room", async () => {
    await mock1.sessionManager.connect("testUser");
    const room = await mock1.sessionManager.createRoom();
    expect(room.getId()).to.have.length.greaterThan(6);
    expect(room.getUsers()).to.have.length(1);

    let gotUpdatedUsers = false;
    mock1.sessionManager.getRoom().once("updated_users", (users) => {
      gotUpdatedUsers = true;
      expect(users).to.have.length(2);
    });

    await mock2.sessionManager.connect("testUser");
    const roomJoined = await mock2.sessionManager.joinRoom(room.getId());
    expect(room.getId()).to.have.length.greaterThan(6);
    expect(roomJoined.getUsers()).to.have.length(2);
    expect(gotUpdatedUsers).to.be.true;
  });
});
