const request = require("supertest");
const app = require("../index");

Describe("OldPerson-OldVehicle-NoData", () => {
  const data = {
    document: "1000",
    plate: "fgh233",
  };

  it("Try form", (done) => {
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
