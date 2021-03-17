const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const blacklistController = require('../controllers/blackList')

// @POST /blacklist 
// @description Blacklist a email from alias

router.post('/', auth, blacklistController);

module.exports = router;
