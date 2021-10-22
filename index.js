const express = require("express");
const morgan = require("morgan");
const app = express();
cors = require("cors");
const bodyparser = require("body-parser");
// require("dotenv").config();
require("./src/dbConnection");

const port = process.env.PORT;

app.set("port", port);

app.use(morgan("dev"));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors({ origin: true }));

//Rutes
app.use("/person", require("./src/routes/personRoute"));
app.use("/user", require("./src/routes/userRoutes"));
app.use("/vehicle", require("./src/routes/vehicleRoute"));

//start server
app.listen(port, () => {
  console.log("Listen in  the port ", port);
});

module.exports = app;
