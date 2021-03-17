var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth');
var deleteAliasController = require('../controllers/delete');

router.post('/',auth, deleteAliasController);

module.exports = router;