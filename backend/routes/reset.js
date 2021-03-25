const router = require('express').Router();
const { post, resetPassGet, resetPassPost } = require('../controllers/reset');

router.post("/",post);
router.get("/token/:token",resetPassGet);
router.post("/token/:token",resetPassPost);

module.exports = router;