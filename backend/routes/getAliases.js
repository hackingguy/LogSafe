const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const getAliasesController = require('../controllers/getAliases');

// @GET /get-aliases
// @desc Get all aliases

router.get('/',auth, getAliasesController);

module.exports = router;