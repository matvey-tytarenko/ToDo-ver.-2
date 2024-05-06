const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserRouter = require('./Routes/UserRoutes')
const ToDoRouter = require('./Routes/ToDoRoutes')
require("dotenv").config();

// Create App
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/api/auth", UserRouter);
app.use(ToDoRouter)
// DataBase
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB is connect successfully!"))
  .catch((err) => console.error(`DB Error: ${err}`));
// Export
module.exports = app;
