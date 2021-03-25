const sendMail = require('../utils/sendMail');
const {validateEmail} = require('../utils/validateSchema');
const User = require('../models/user');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

module.exports.post = async(req,res,next)=>{
  try {
    let result = await validateEmail.validateAsync(req.body);
    let user = await User.findOne({ email: result.email });
    let host = process.env.HOST;
    if (!user||!user["isVerified"])
      return res.send({ error:"true", message:"User not registered" });
    let resetToken = crypto.randomBytes(20).toString("hex");
    let expiry = Date.now() + 24 * 60 * 60 * 1000;

    user["passwordResetToken"] = resetToken;
    user["resetTokenExpiry"] = expiry;

    const msg = {
      to: result.email,
      from: `care@${host.split("//")[1]}`,
      subject: `[LogSafe] Reset Your Password`,
      html: `Hi ${user.name}\n\nWe have received a request to reset your password. Follow this <a href="${process.env.HOST}/reset/token/${resetToken}">link</a>.Please note that this link is only valid for 24 hrs.<br>If you have not requested this, please ignore this mail.<br><br>Regards,<br>LogSafe`,
    };

    let sent = await sendMail(msg);
    if (!sent) return res.send({ error:"true", message:"Error while sending mail" });
    await user.save();
    res.send({error:"false", message: "Mail Sent" });
  }
  catch (error) {
    if (error.isJoe)
      error.status = 422;
    next(error);
  }
}

module.exports.resetPassGet = async(req,res)=>{
  let token = req.params.token;
  let user = await User.findOne({
    passwordResetToken: token,
    resetTokenExpiry: { $gt: Date.now() },
  });
  if (!user)
    return res.send({ error:"false",message:"Token is expired or invalid" });
  res.send({error:"true",message:"Reset Mail Sent Successfully"})
}

module.exports.resetPassPost = async(req,res)=>{
  let token = req.params.token;
  if(!token)
    return res.status(400).send({ error:"true",message: "Error Token Required" });
  let newPass = req.body["password"];
  if (newPass.length < 8 || newPass.length > 50)
    return res.status(400).send({ error:"true",message: "Invalid Password Length" });
  let user = await User.findOne({
    passwordResetToken: token,
    resetTokenExpiry: { $gt: Date.now() },
  });
  if (!user)
    return res.send({ error:"false",message:"Token is expired or invalid" });
  let isSame = await bcrypt.compare(newPass, user.password);
  if (isSame)
    return res.status(400).send({ error:"false",message: "Old and new passwords cannot be same" });
  user.password = await generateHash(newPass);
  user.passwordResetToken = undefined;
  user.resetTokenExpiry = undefined;
  await user.save();
  res.send({ error:"false",message: "Password Changed Successfully" });
}
