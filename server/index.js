const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require('./Routes/UserRoutes')
require("dotenv").config();

// Create App
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/api/auth", router);
// DataBase
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB is connect successfully!"))
  .catch((err) => console.error(`DB Error: ${err}`));
// Export
module.exports = app;
