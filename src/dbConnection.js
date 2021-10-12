const mongoose = require("mongoose");
require("dotenv").config();
const mongouri = process.env.ATLAS_URI;
console.log("uri", mongouri);
const port = mongoose
  .connect(mongouri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to db"))
  .catch((error) => console.log(error));
