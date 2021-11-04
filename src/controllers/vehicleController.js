const vehicleController = {};
let Vehicle = require("../models/vehicleModel");
let { findPerson } = require("./personController");

// vehicleController.getAll = (req, res) => {
//   let vehicles = Vehicle.find().populate("personId");
// };

vehicleController.addVehicle = async (plate, person) => {
  return new Promise(async (resolve, reject) => {
    let vehicle = await Vehicle.findOne({ plate });
    if (vehicle == null) {
      const newVehicle = new Vehicle({
        plate,
        state: "En Revisión",
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
    } else {
      reject("Placa de vehiculo duplicada");
    }
  });
};

vehicleController.postAddVehicle = async (req, res) => {
  let { document, plate } = req.body;
  let person = await findPerson(document);
  console.log("person", person);
  if (person != null) {
    let vehicle = await Vehicle.findOne({ plate });
    if (vehicle == null) {
      const newVehicle = new Vehicle({
        plate,
        state: "En Revisión",
      });
      await newVehicle
        .save()
        .then(async () => {
          person.vehicles.push(newVehicle);
          await person
            .save()
            .then(() => res.status(200).json("Usuario creado correctamente"))
            .catch((e) => res.status(400).json(e));
        })
        .catch((e) => {
          res.status(400).json(e);
        });
    } else {
      res.status(400).json("placa duplicada");
    }
  } else {
    res.status(400).json("La persona no se encuentra registrada");
  }
};

vehicleController.deleteVehicleByPlate = (plate) => {
  return new Promise(async (resolve, reject) => {
    Vehicle.findOneAndDelete({ plate })
      .then(() => resolve())
      .catch((err) => reject(err));
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
