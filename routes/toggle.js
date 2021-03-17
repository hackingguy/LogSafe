const express = require('express');
const router = express.Router();
const toggleMailController = require('../controller/toggleAlias');

router.post('/', auth, toggleMailController);

module.exports = router;