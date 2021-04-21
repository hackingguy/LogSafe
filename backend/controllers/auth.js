const User = require("../models/user");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
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
      return res.send({error:"true",message:"You Need To Log Out"});
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
      if (!curr["isVerified"])
        return res.send({ error: "true", message: "Email Not Verified" });

      let token = generateToken(curr._id, "30d");

      res.cookie("token", token, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
        httpOnly: true,
        SameSite:"Strict"
      });

      res.send({
        error: "false",
        _id: curr._id,
        name: curr.name,
        message: "Logged In Successfully",
      });
    } else
      res
        .status(401)
        .send({ error: "true", message: "Invalid Email Or Password" });
  },
  registerPost: async (req, res) => {
    if (req.userID)
      return res.send({error:"true",message:"You Need To Log Out"});
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
    let uniqueToken = crypto.randomBytes(20).toString("hex");
    let salt = await bcrypt.genSalt(10);
    usr.password = await bcrypt.hash(usr.password, salt);
    let user = new User({
      name: usr.name,
      email: usr.email,
      password: usr.password,
      aliases: [],
      isVerified: false,
      uniqueToken: uniqueToken,
    });
    const msg = {
      to: usr.email,
      from: `care@logsafe.ml`,
      subject: `[LogSafe] Verify Your Email`,
      html: `Hi ${user.name},<br><br>Thanks Alot For Joining us.We have received a request to verify your email. Follow this <a href="${process.env.HOST}/verify/${uniqueToken}">link to verify your account</a><br>If you have not requested this, please ignore this mail.<br><br>Regards,<br>LogSafe`,
    };
    let isSent = await sendMail(msg);
    if (!isSent) {
      return res.status(400).send({
        error: "true",
        message: "Error, Unable To Send Mail",
      });
    }
    await user.save();
    res.send({
      error: "false",
      message: "Verification Email Sent Successfully!",
    });
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
