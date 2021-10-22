const request = require("supertest");
const app = require("../index");
const {
  deletePersonByDocument,
} = require("../src/controllers/personController");
const {
  deleteVehicleByPlate,
} = require("../src/controllers/vehicleController");

describe("NewPerson-NewVehicle-AllData", () => {
  const data = {
    document: "12345",
    name: "nombre1",
    secondaryName: "nombre2",
    lastName: "apellido",
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

  it("Delete Person", (done) => {
    deletePersonByDocument(data.document).then(() => {
      done();
    });
  });

  it("Delete Vehicle", () => {
    deleteVehicleByPlate(data.plate).then(() => {
      done();
    });
  });
});
