const express = require('express');
const router = express.Router();

// @GET /dashboard
// @desc Get Dashboard Of User

router.get('/', function(req, res, next) {
  res.send("Hello World");
});

module.exports = router;
