import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../server.js";
import Message from "../src/models/Message.js";
import mockMessageData from "./mockMessageData.js";
const testMessages = mockMessageData.messages;
chai.use(chaiHttp);

describe(`Testing requests on the database`, () => {
  const testServer = chai.request(server).keepOpen();

  beforeEach(async () => {
    try {
      await Message.deleteMany();
      console.log("Database is empty!");
    } catch (error) {
      console.log("Error clearing database!");
      throw new Error();
    }
    try {
      await Message.insertMany(testMessages);
      console.log(`Database populated with test messages`);
    } catch (error) {
      console.log(`Error inserting test messages`);
      throw new Error();
    }
  });
  describe("Group request tests for message", () => {
    it("Should return messages as an array(GET request)", async () => {
      const res = await testServer.get(`/`).send();

      expect(res).to.have.status(200);
      expect(res.body).to.be.an("array");
      expect(res.body.length).to.equal(testMessages.length);
    });
    it("Should not post message to database because of lacking username", async () => {
      let message = {
        message: "Hello test",
      };
      const res = await testServer.post("/").send(message);
      expect(res).to.have.status(400);
      expect(res).to.have.property(`error`);
      expect(res.text).to.be.eql(`Adding new message failed`);
    });
    it("Should post message to database", async () => {
      let message = {
        message: "hello test",
        username: "test username",
      };
      const res = await testServer.post("/").send(message);
      expect(res).to.have.status(201);
      expect(res).to.be.an("object");
      expect(res.body.message).to.be.eql(message.message);
      expect(res.body.username).to.be.eql(message.username);
    });
  });
});
