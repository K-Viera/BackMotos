const { Schema, model } = require("mongoose");

const personSchema = new Schema({
  document: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  secondaryName: {
    type: String,
  },
  lastName: {
    type: String,
    require: true,
  },
  secondaryLastName: {
    type: String,
  },
  vehicles: [
    {
      type: Schema.ObjectId,
      ref: "Vehicle",
    },
  ],
});

const Person = model("Person", personSchema);
module.exports = Person;
