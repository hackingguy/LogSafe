var express = require('express');
var router = express.Router();
var getEmailsController = require('../controllers/getEmails');

router.get('/',auth, getEmailsController);

module.exports = router;