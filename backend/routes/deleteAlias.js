const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const deleteAliasController = require('../controllers/deleteAlias');

// @POST /delete-alias
// @desc Delete a alias

router.post('/',auth, deleteAliasController);

module.exports = router;