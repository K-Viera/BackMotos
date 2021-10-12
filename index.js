const express = require("express");
const morgan = require("morgan");
const app = express();
cors = require("cors");
const bodyparser = require("body-parser");

//dbConnection
require("dotenv").config();
require("./src/dbConnection");
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listen in the port ", port);
});
