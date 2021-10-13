const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: string,
    required: true,
    unique,
  },
  password: {
    type: string,
    required: true,
  },
});

const User = model("User", userSchema);
module.exports = User;
