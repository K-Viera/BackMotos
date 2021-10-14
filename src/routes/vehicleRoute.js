const { Router } = require("express");
const route = Router();
const vehicleController = require("../controllers/vehicleController");

route.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

route.get("/", vehicleController.getVehicles);
route.post("/changeVehicle", vehicleController.modifyVehicle);

module.exports = route;
