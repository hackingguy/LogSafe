const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const createMailController = require('../controllers/createAlias');

// @GET /create-alias
// @desc Create alias

router.post('/', auth, createMailController);

module.exports = router;