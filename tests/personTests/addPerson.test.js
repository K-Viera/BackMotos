const request = require("supertest");
const app = require("../../index");
const {
  deletePersonByDocument,
} = require("../../src/controllers/personController");

describe("Post Person", () => {
  const data = {
    document: "12345678",
    name: "nombre1",
    secondaryName: "nombre2",
    lastName: "apellido",
  };

  it("New Person", (done) => {
    request(app)
      .post("/person")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);

  it("Old Person", (done) => {
    request(app)
      .post("/person")
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
