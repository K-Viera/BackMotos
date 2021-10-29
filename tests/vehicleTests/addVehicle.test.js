const request = require("supertest");
const app = require("../../index");

const {
  deleteVehicleByPlate,
} = require("../../src/controllers/vehicleController");

describe("Post Vehicle", () => {
  const data = {
    document: "12345678",
    plate: "1234567",
  };

  it("new person", () => {
    request(app)
      .post("/vehicle")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);

  data.document = "1000";
  it("old person,new plate", () => {
    request(app)
      .post("/vehicle")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);

  it("old person,old plate", () => {
    request(app)
      .post("/vehicle")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);

  it("Delete Vehicle", (done) => {
    deleteVehicleByPlate(data.plate).then(() => {
      done();
    });
  }).timeout(10000);
});
