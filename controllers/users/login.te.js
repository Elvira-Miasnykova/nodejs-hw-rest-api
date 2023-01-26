// const express = require("express");
// const request = require("supertest");

// const listContacts = require("../contacts/listContacts");

// const app = express();

// app.get("/api/contacts", listContacts)

// describe("test get all contacts", () => {
//   beforeAll(() => app.listen(3000));

//   test("should get status 200", async () => {
//     const response = await request(app).get("/api/contacts");
//     console.log(response);
//     // expect(response.status).toBe(200)
//   })
  // test("should get status 200", async () => {
  //   const mReq = {
  //     body: {
  //       email: "user1@test.com",
  //       password: "test123"
  //     },
  //   };
  //   const mRes = {};
  //   await request(app).post(
  //     "/api/users/login",
  //     login(mReq, mRes)
  //   );
    
    // expect(mRes.status).toBe(200);
  // });
// });