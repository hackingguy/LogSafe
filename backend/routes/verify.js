var express = require('express');
var router = express.Router();
var verifyController = require('../controllers/verify');

router.get('/:token',verifyController);

module.exports = router;