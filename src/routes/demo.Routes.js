const express = require("express");
const demoRoutes = express.Router();
const auth = require("../middlewares/auth")
const { addData, getData } = require("../Controllers/demo.Controller");


demoRoutes.get("/getData",getData); 

demoRoutes.post("/addData",addData);

module.exports = demoRoutes;