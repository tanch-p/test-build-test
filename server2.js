// Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// Dependency configurations
const app = express();
const PORT = 5000;
const MONGODB_URI = process.env.MONGODB_URI;
// middleware
app.use(express.json()); // use .json(), not .urlencoded()

// Database Error / Disconnection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

// Database connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// Controllers/Routes
const holidaysController = require("./controllers/holidayController.js");
app.use("/holidays", holidaysController);

// Listen
app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});