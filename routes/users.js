var express = require('express');
var userSchema = require('./models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});



module.exports = router;
