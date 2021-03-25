const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validateLogin, validateRegister } = require("../utils/validateSchema");
const _ = require("lodash");

function generateToken(id, exp) {
  return jwt.sign({ _id: id }, process.env.JWT_SECRET_TOKEN, {
    expiresIn: exp,
  });
}

module.exports = {
  loginPost: async (req, res) => {
    if (req.userID)
      return res.send({
        error: "true",
        message: "You Need To Log Out!",
      });
    let { email, password } = req.body;
    let value = validateLogin.validate(req.body);
    if (value.error)
      return res.send({
        error: "true",
        message: value.error.details[0].message,
      });
    let curr = await User.findOne({ email: email });
    if (!curr)
      return res
        .status(400)
        .send({ error: "true", message: "Invalid Email Or Password" });
    let isValid = await bcrypt.compare(password, curr.password);
    if (isValid) {
      let token = generateToken(curr._id, "24h");
      res.cookie("token", token, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        httpOnly: true,
      });
      res.send({
        error: "false",
        _id: curr._id,
        name: curr.name,
        token: token,
      });
    } else
      res
        .status(400)
        .send({ error: "false", message: "Invalid Email Or Password" });
  },
  registerPost: async (req, res) => {
    if (req.userID)
      return res.send({ error: "true", message: "You need To log out!" });
    let usr = _.pick(req.body, ["name", "email", "password"]);
    let value = validateRegister.validate(usr);
    if (value.error)
      return res.send({
        error: "true",
        message: value.error.details[0].message,
      });
    let a = await User.findOne({ email: usr.email }).exec();
    if (a)
      return res
        .status(400)
        .send({ error: "true", message: "User already registered" });
    let salt = await bcrypt.genSalt(10);
    usr.password = await bcrypt.hash(usr.password, salt);
    let user = new User(usr);
    let r = await user.save();
    res.send({ error: "false", _id: r._id });
  },
  logout: async (req, res) => {
    if (req.userID) {
      let expToken = generateToken(req.userID, 1);
      res.cookie("token", expToken, {
        expires: new Date(Date.now() + 1),
        httpOnly: true,
      });
      return res.redirect("/login");
    }
    res.redirect("/login");
  },
};
