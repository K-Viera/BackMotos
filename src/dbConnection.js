const mongoose = require("mongoose");
// require("dotenv").config();
const mongouri =
  "mongodb+srv://motos:motos@cluster0.aqf8e.mongodb.net/motosdb?retryWrites=true&w=majority";

mongoose
  .connect(mongouri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to db"))
  .catch((error) => console.log(error));

module.exports = mongoose;
