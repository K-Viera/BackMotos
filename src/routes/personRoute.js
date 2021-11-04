const { Router } = require("express");
const route = Router();
const personController = require("../controllers/personController");
const vehicleController = require("../controllers/vehicleController");

route.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

route.get("/", personController.getAll);
route.post("/", personController.addPerson);
route.post("/vehicle", vehicleController.postAddVehicle);
// route.post("/sendForm", personController.verifyForm);
route.post("/getByDocument", personController.getBydocument);

module.exports = route;
