const express = require('express');
const router = express.Router();

// @GET /
// @desc Get Landing Page

router.get('/', function(req, res, next) {
  res.send("Hello World");
});

module.exports = router;
