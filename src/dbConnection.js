const mongoose = require("mongoose");
// require("dotenv").config();
const mongouri =
  "mongodb+srv://user:user@cluster0.eildf.mongodb.net/motos?retryWrites=true&w=majority";

mongoose
  .connect(mongouri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to db"))
  .catch((error) => console.log(error));

module.exports = mongoose;
