var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth')
var getEmailsController = require('../controllers/getEmails');

router.get('/',auth, getEmailsController);

module.exports = router;