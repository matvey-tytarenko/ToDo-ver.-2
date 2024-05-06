const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const verification = require("../code");
require("dotenv").config();

module.exports.email = (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.Email,
      pass: process.env.Email_Pass,
    },
  });

  const MailOpt = {
    to: email,
    subject: "Verification Code",
    text: `Your verification code: ${verification}`,
  };

  try {
    transporter.sendMail(MailOpt, () => {
      console.log("Email will sent!");
      return res.status(200).json({ msg: "Email will sent!", status: true });
    });
  } catch (err) {
    console.error("Email Error!");
    return res
      .status(400)
      .json({ msg: `Email send Error: ${err}`, status: false });
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ msg: "Incorect username or password", status: false });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ msg: "Incorect username or password", status: false });
    }
    delete user.password;

    return res.json({ status: true, user });
  } catch (error) {
    next(error);
  }
};

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) {
      return res.json({ msg: "Username already used!", status: false });
    }

    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: "Email already used!", status: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    next(error);
  }
};