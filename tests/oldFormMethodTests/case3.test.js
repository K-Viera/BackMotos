const request = require("supertest");
const app = require("../index");
const {
  deletePersonByDocument,
} = require("../src/controllers/personController");

describe("NewPerson-OldVehicle", () => {
  const data = {
    document: "12345",
    name: "nombre1",
    secondaryName: "nombre2",
    lastName: "apellido1",
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

  it("Delete Person", (done) => {
    deletePersonByDocument(data.document).then(() => {
      done();
    });
  });
});
