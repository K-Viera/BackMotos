const { Schema, model } = require("mongoose");

const vehicleSchema = new Schema({
  plate: {
    type: string,
    required: true,
    unique: true,
  },
  state: {
    type: String,
    required: true,
  },
  personId: { type: Schema.ObjectId, ref: "Person" },
});
