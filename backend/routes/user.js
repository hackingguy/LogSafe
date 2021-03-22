var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth');
var userController = require('../controllers/getAliases');

// @GET /user
// @desc Get User Details (Email And Name)

router.get('/',auth, userController);

module.exports = router;