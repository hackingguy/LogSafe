var express = require('express');
var router = express.Router();
var blacklistController = require('../controllers/blackList')

/* GET home page. */
router.post('/', blacklistController);

module.exports = router;
