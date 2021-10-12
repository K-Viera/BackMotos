const mongoose = require("mongoose");
require("dotenv").config;
mongoose
  .connect(process.env.ATLAS_URI || 5000, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to db"))
  .catch((error) => console.log(error));
