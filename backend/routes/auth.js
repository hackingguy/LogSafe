const router = require('express').Router();
const auth = require('../middlewares/auth')
const {loginPost,registerPost,logout} = require('../controllers/auth')

// @GET /login
// @POST /login
// @GET /register
// @POST /register
// @GET /logout
// @desc Creating And Logging In The User

router.post('/login',auth,loginPost);
router.post('/register',auth,registerPost);
router.get('/logout',auth,logout);
module.exports = router;