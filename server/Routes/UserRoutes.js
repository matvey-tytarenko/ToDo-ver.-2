const UserRouter = require("express").Router();
const { email, login, register } = require("../Controller/UserController");

UserRouter.post("/register", register);
UserRouter.post("/login", login);
UserRouter.post("/verify", email);

module.exports = UserRouter;
