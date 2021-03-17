const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const toggleMailController = require('../controllers/toggleAlias');

router.post('/', auth, toggleMailController);

module.exports = router;