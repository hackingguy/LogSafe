const express = require('express');
const router = express.Router();
const recieveMailController = require('../controllers/createAlias');

// @POST /recieve-mail
// @desc Private Endpoint for AWS to recieve and forward mail from lambda function

router.post('/', recieveMailController);

module.exports = router;