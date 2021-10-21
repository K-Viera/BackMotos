const request = require("supertest");
const app = require("../index");
const {
  deletePersonByDocument,
} = require("../src/controllers/personController");

//testing get all persons

describe("NewPerson-NewVehicle-AllData", () => {
  const data = {
    document: "100000111111111",
    name: "kevin",
    secondaryName: "alejandro",
    lastName: "viera",
    plate: "1111111111111",
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
});

describe("NewPerson-NewVehicle-NoData", () => {
  const data2 = {
    document: "100000111111111111111",
    plate: "111111111111111",
  };

  it("Try form without data", (done) => {
    request(app)
      .post("/person/sendForm")
      .send(data2)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);
});
