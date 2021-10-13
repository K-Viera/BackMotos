const { Router } = require("express");
const route = Router();
const personController = require("../controllers/personController");

route.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

route.get("/", personController.prueba);

module.exports = route;
