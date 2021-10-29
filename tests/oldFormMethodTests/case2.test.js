const request = require("supertest");
const app = require("../index");

describe("NewPerson-NewVehicle-NoData", () => {
  const data = {
    document: "12345",
    plate: "12345",
  };

  it("Try form without data", (done) => {
    request(app)
      .post("/person/sendForm")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);
});
