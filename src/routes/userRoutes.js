const { Router } = require("express");
const route = Router();
const userController = require("../controllers/userController");

route.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

route.post("/signIn", userController.signIn);
route.post("/logIn", userController.logIn);

module.exports = route;
