var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth');
var userController = require('../controllers/getEmails');

router.get('/',auth, userController);

module.exports = router;