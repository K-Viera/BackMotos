const vehicleController = {};
let Vehicle = require("../models/vehicleModel");

// vehicleController.getAll = (req, res) => {
//   let vehicles = Vehicle.find().populate("personId");
// };


vehicleController.addVehicle = async (plate, person) => {
  return new Promise(async (resolve, reject) => {
    const newVehicle = new Vehicle({
      plate,
      state: "Revision",
    });
    await newVehicle
      .save()
      .then(() => {
        person.vehicles.push(newVehicle);
        person
          .save()
          .then(() => resolve("success"))
          .catch((e) => reject(e));
      })
      .catch((e) => {
        reject(e);
      });
  });
};

vehicleController.getVehicles = (req, res) => {
  Vehicle.find()
    .populate("person")
    .then((obj) => res.status(200).json(obj))
    .catch((e) => res.status(400).json(e));
};

vehicleController.modifyVehicle = (req, res) => {
  let { plate, state } = req.body;
  Vehicle.findOneAndUpdate({ plate }, { state })
    .then(() => res.status(200).json("Modificado Correctamente"))
    .catch((e) => res.status(400).json(e));
};
module.exports = vehicleController;
