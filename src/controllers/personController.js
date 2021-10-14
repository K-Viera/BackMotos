const personController = {};
let Person = require("../models/personModel");
let { addVehicle } = require("./vehicleController");

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
      .then(() => res.status(200).json("ingreso correcto"))
      .catch((e) => {
        res.status(400).json(e);
      });
  } else res.status(400).json("error");
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
