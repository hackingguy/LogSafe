const jwt = require('jsonwebtoken')
const User = require('../models/user')
var auth = async(req,res,next)=>{
    try{
        //Authorization: Bearer <Auth Token>
        let token = req.headers.cookie.split("token=")[1].split(";")[0];
        let payload = jwt.verify(token,process.env.JWT_SECRET_TOKEN);
        let id = payload._id;
        req.userID = id;
        let user = await User.exists({_id:id});
        if(!user) return res.send({
            "error":"true",
            "message":"Administrator will be informed about this action"
        });
        return next();
    }
    catch(err){
        return next();
    }
}

module.exports = auth;