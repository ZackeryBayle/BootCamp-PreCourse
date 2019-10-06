const express = require("express");
const { mongoose } = require("./db");
const cors = require('cors');
var employeeController = require("./controllers/employee.controller.js");

const bodyPraser = require("body-parser");

var app = express();
app.use(bodyPraser.json());
app.use(cors({ origin: 'http://localhost:4200'}));

app.listen(3000, () => console.log("Server Started on Port: 3000"));

app.use("/employee", employeeController);

