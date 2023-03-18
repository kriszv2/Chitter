import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../server.js";

chai.use(chaiHttp);

describe("GET request tests", () => {
  it("Tests if request is successful", async () => {
    const res = await chai.request(server).get("/").send();
    expect(res).to.have.status(200);
  });
});
