const express = require('express');
const router = express.Router();
const recieveMailController = require('../controllers/recieveMail');
var multer = require('multer');
var storage = multer.memoryStorage();
router.use(multer({storage:storage}).single('fileScan'));

// @POST /recieve-mail
// @desc Private Endpoint for SendGrid to recieve and forward mail from lambda function

router.post('/', recieveMailController);

module.exports = router;