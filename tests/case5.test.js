const request = require("supertest");
const app = require("../index");

describe("OldPerson-NewVehicle-NoData", () => {
  const data = {
    document: "1000",
    plate: "12345",
  };

  it("Try form", (done) => {
    request(app)
      .post("/person/sendForm")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);

  it("Delete Vehicle", () => {
    deleteVehicleByPlate(data.document).then(() => {
      done();
    });
  });
});
