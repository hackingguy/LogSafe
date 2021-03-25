const express = require('express');
const router = express.Router();

// @GET /
// @desc Get Landing Page

router.get('/', function(req, res, next) {
  res.send({
    "error":"false",
    "message":"API Working Perfectly"
  });
});

module.exports = router;