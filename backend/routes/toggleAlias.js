const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const toggleMailController = require('../controllers/toggleAlias');

// @POST /toggle-alias
// @desc Toggle the alias (Activate/Deactivate)

router.post('/', auth, toggleMailController);

module.exports = router;