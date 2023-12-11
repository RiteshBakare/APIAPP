const DemoSchema = require("../models/demo.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "DEMOAPIAPP";

const addData = async (req, res) => {
   res.json("hello")
};

const getData = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
};

module.exports = { addData, getData };