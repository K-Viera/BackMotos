const request = require("supertest");
const app = require("../index");
const {
  deleteVehicleByPlate,
} = require("../src/controllers/vehicleController");

describe("OldPerson-NewVehicle-NoData", () => {
  const data = {
    document: "1000",
    plate: "1234567",
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
    deleteVehicleByPlate(data.plate).then(() => {
      done();
    });
  });
});
