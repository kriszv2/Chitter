import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../server.js";
import Message from "../src/models/Message.js";
import User from "../src/models/User.js";
import mockMessageData from "./mockMessageData.js";
import mockUserData from "./mockData.js";
const testUsers = mockUserData.users;
const testMessages = mockMessageData.messages;
chai.use(chaiHttp);

describe(`Testing requests on the message database`, () => {
  const testServer = chai.request(server).keepOpen();
  //delete and insert mock data into Message database
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
  //Groupping of Message API calls
  describe("Group request tests for message", () => {
    //Get request to message database
    it("Should return messages as an array(GET request)", async () => {
      const res = await testServer.get(`/`).send();

      expect(res).to.have.status(200);
      expect(res.body).to.be.an("array");
      expect(res.body.length).to.equal(testMessages.length);
    });
    //Invalid post request to message database
    it("Should not post message to database because of lacking username", async () => {
      let message = {
        message: "Hello test",
      };
      const res = await testServer.post("/").send(message);
      expect(res).to.have.status(400);
      expect(res).to.have.property(`error`);
      expect(res.text).to.be.eql(`Adding new message failed`);
    });
    //Valid post request to message database
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
describe(`Testing requests on the user database`, () => {
  const testServer = chai.request(server).keepOpen();
  //delete and insert mock data into User database
  beforeEach(async () => {
    try {
      await User.deleteMany();
      console.log("User database is empty!");
    } catch (error) {
      console.log("Error clearing user database!");
      throw new Error();
    }
    try {
      await User.insertMany(testUsers);
      console.log(`User database populated with test users`);
    } catch (error) {
      console.log(`Error inserting test users`);
      throw new Error();
    }
  });
  //Groupping of Message API calls
  describe("Group request tests for message", () => {
    //Invalid post request to User database
    it("Should not register user to database because of lacking username", async () => {
      let user = {
        firstName: "test first name",
        lastName: "test last name",
        email: "test email",
        password: "test password",
      };
      const res = await testServer.post("/register").send(user);

      expect(res).to.have.status(500);
      expect(res).to.have.property(`error`);
      expect(res.text).to.contain(`Error creating user!`);
    });
    it("Should send successful registration request", async () => {
      let user = {
        firstName: "test first name",
        lastName: "test last name",
        email: "test email",
        password: "test password",
        username: "test username",
      };
      const res = await testServer.post("/register").send(user);

      expect(res).to.have.status(201);
      expect(res).to.be.an("object");
      expect(res.text).to.contain(`Created user!`);
    });
    //Valid post request to User database
    it("Should return error message of invalid login request", async () => {
      let user = {
        username: "hello test",
      };
      const res = await testServer.post("/login").send(user);
      expect(res).to.have.status(404);
      expect(res).to.have.property(`error`);
    });
    //Register test account and make successful login request
    it("Should return successful login request", async () => {
      let userReg = {
        firstName: "test first name",
        lastName: "test last name",
        email: "test email",
        password: "test password",
        username: "test username",
      };
      let user = {
        username: "test username",
        password: "test password",
      };
      await testServer.post("/register").send(userReg);
      const res = await testServer.post("/login").send(user);

      expect(res.body.message).to.be.eql("Login Successful");
    });
  });
});
