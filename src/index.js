const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const userRoutes = require("./routes/user.Routes");
const demoRoutes = require("./routes/demo.Routes");

app.use(express.json());

dotenv.config();

app.use("/users", userRoutes);
app.use("/demo", demoRoutes);

app.get("/", (req, res) => {
  res.send("Demo API APP ");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.wbiqwl1.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB Connected ");
    app.listen(PORT, () => {
      console.log("Server Start on Port on http://localhost:5000/ ");
    });
  })
  .catch((error) => {
    console.log(error);
});