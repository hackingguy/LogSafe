const router = require('express').Router();
const auth = require('../middlewares/auth')
const {loginPost,registerPost,logout} = require('../controllers/auth')

// @GET /login
// @POST /login
// @GET /register
// @POST /register
// @GET /logout
// @desc Creating And Logging In The User

router.post('/api/login',auth,loginPost);
router.post('/api/register',auth,registerPost);
router.get('/api/logout',auth,logout);
module.exports = router;