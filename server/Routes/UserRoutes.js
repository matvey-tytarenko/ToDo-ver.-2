const router = require("express").Router();
const { email, login, register } = require("../Controller/UserController");

router.post("/register", register);
router.post("/login", login);
router.post("/verify", email);

module.exports = router;
