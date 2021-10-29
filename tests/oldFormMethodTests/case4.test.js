const request = require("supertest");
const app = require("../index");
const {
  deleteVehicleByPlate,
} = require("../src/controllers/vehicleController");

describe("OldPerson-NewVehicle-AllData", () => {
  const data = {
    document: "1000",
    name: "nombre1",
    secondaryName: "nombre2",
    lastName: "apellido",
    plate: "123456",
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

  it("Delete Vehicle", (done) => {
    deleteVehicleByPlate(data.plate).then(() => {
      done();
    });
  });
});
