const express = require('express');
const router = express.Router();
const recieveMailController = require('../controllers/createMail');

router.post('/', recieveMailController);

module.exports = router;