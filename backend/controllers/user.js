const User = require("../models/user");
const Alias = require("../models/alias");

module.exports = async (req, res) => {
  if (!req.userID)
    return res.status(403).send({
      error: "true",
      message: "Authorization Token Needed",
    });
  let usr = await User.findOne({ _id: req.userID }).select({
    password: 0,
    __v: 0,
  });
  let aliases = await Alias.model
    .find({ _id: { $in: usr.aliases } })
    .select({ userID: 0, __v: 0 });
  usr.aliases = undefined;
  let user = {
    aliases: aliases,
    user: usr,
  };
  res.send(user);
};
