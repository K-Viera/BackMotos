const personController = {};
let Person = require("../models/personModel");

personController.prueba = (req, res) => {
  res.json("prueba");
};

module.exports = personController;
