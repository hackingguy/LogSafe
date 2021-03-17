var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth')
var blacklistController = require('../controllers/blackList')

/* GET home page. */
router.post('/', auth, blacklistController);

module.exports = router;
