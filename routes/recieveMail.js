const express = require('express');
const router = express.Router();
const recieveMailController = require('../controller/createMail');

router.post('/', recieveMailController);

module.exports = router;