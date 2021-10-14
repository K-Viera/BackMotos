const { Schema, model } = require("mongoose");

const vehicleSchema = new Schema({
  plate: {
    type: String,
    required: true,
    unique: true,
  },
  state: {
    type: String,
    required: true,
  },
  person: { type: Schema.ObjectId, ref: "Person" },
});

const Vehicle = model("Vehicle", vehicleSchema);
module.exports = Vehicle;
