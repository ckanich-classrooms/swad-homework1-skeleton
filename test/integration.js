// Import the dependencies for testing
var app = require("../app");
var assert = require("assert");
var axios = require("axios");
const PORT = 3000;

describe("application", async () => {
  let server = {};
  const client = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:${PORT}/`,
    validateStatus: function(status) {
      /* always resolve on any HTTP status */
      return true;
    }
  });

  before(async () => {
    server = app.listen(PORT);
  });

  after(async () => {
    await server.close();
  });

  describe("sanity", async () => {
    it("can successfully send an index", async () => {
      let result = await client.get("/");
      assert.strictEqual(result.status, 200);
    });

    it("doesn't send files that don't exist", async () => {
      let result = await client.get("doesnotexist");
      assert.strictEqual(result.status, 404);
    });

    it("sends the raw index.html", async () => {
      let result = await client.get("/");
      assert(result.data.includes("Welcome to Express!"));
    });
  });

  describe("unauthenticated state", async () => {
    describe("registration", async () => {
      it("allows a user to register");
      it("does not allow duplicate usernames");
      it("requires a password to register");
      it("requires the favorite number to be a number");
    });

    describe("login", async () => {
      it("works");
    });
  });

  describe("authenticated state", async () => {
    
    describe("logging out", async () => {
      it("works");
    });

    describe("incrementing the server number", async () => {
      it("works");
    });

    describe("updating my favorite number", async () => {
      it("works");
    });

    describe("listing the logged in users", async () => {
      it("works");
    });
  });
});
