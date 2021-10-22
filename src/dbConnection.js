const mongoose = require("mongoose");
// require("dotenv").config();
const mongouri =
  "mongodb+srv://admin:admin@motosdb.lxnj9.mongodb.net/Motos?retryWrites=true&w=majority";

mongoose
  .connect(mongouri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((error) => console.log(error));

module.exports = mongoose;
