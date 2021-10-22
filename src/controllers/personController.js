const personController = {};
let Person = require("../models/personModel");
let { addVehicle } = require("./vehicleController");

personController.getAll = (req, res) => {
  Person.find()
    .populate("vehicles")
    .then((obj) => res.status(200).json(obj))
    .catch((e) => res.status(400).json(e));
};

personController.getBydocument = (req, res) => {
  let { document } = req.body;
  Person.find({ document })
    .populate("vehicles")
    .then((obj) => res.status(200).json(obj))
    .catch((e) => res.status(400).json(e));
};

personController.verifyForm = async (req, res) => {
  let { document, name, secondaryName, lastName, secondaryLastName, plate } =
    req.body;
  let person = await verifyPerson(
    document,
    name,
    secondaryName,
    lastName,
    secondaryLastName
  ).catch((e) => res.status(400).json(e));
  if (person) {
    await addVehicle(plate, person)
      .then(() => res.status(201).json("ingreso correcto"))
      .catch((e) => {
        res.status(400).json(e);
      });
  } else res.status(400).json("error al crear una persona");
};

personController.findVechicle = (req, res) => {
  let { document } = req.body;
  Person.find({ document })
    .populate("vehicles")
    .then((obj) => {
      // console.log(JSON.stringify(obj));
      res.status(200).json(obj);
    })
    .catch((e) => res.status(400).json(e));
};

personController.deletePersonByDocument = (document) => {
  return new Promise(async (resolve, reject) => {
    await Person.findOneAndDelete({ document })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

async function verifyPerson(
  document,
  name,
  secondaryName,
  lastName,
  secondaryLastName
) {
  return new Promise(async (resolve, reject) => {
    let person = await Person.findOne({ document });
    if (person) {
      resolve(person);
    } else {
      let newPerson = await addUser(
        document,
        name,
        secondaryName,
        lastName,
        secondaryLastName
      ).catch((e) => {
        reject(e);
      });
      resolve(newPerson);
    }
  });
}

async function addUser(
  document,
  name,
  secondaryName,
  lastName,
  secondaryLastName
) {
  return new Promise(async (resolve, reject) => {
    const newPerson = new Person({
      document,
      name,
      secondaryName,
      lastName,
      secondaryLastName,
    });
    await newPerson
      .save()
      .then(() => {
        resolve(newPerson);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

module.exports = personController;
