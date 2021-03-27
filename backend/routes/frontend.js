const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", auth, function (req, res, next) {
  if (req.userID) return res.redirect("/dashboard");
  next();
});

router.get("/login",auth, (req, res, next) => {
  if (req.userID) return res.redirect("/dashboard");
  next();
});

router.get("/dashboard",auth, (req, res, next) => {
  if (!req.userID) return res.redirect("/login");
  next();
});

module.exports = router;