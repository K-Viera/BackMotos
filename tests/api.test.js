const request = require("supertest");
const app = require("../index");

//testing get all persons
it("respond with json containing list of users with vehicle", (done) => {
  request(app)
    .get("/person")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200, done);
}).timeout(5000);

it("try to create new findForm", (done) => {
  const data = {
    document: "1000",
    name: "kevin",
    secondaryName: "alejandro",
    lastName: "viera",
    plate: "fgh233",
  };
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
}).timeout(50000);
