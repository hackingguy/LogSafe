const express = require('express');
const router = express.Router();
var sendMailUtil = require('../utils/sendMail')

/* GET home page. */
router.post('/', sendMailUtil);


module.exports = router;
