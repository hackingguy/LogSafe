const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const createMailController = require('../controller/createMail');

router.post('/', auth, createMailController);

module.exports = router;