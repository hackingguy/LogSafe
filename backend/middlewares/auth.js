const jwt = require('jsonwebtoken')

var auth = async(req,res,next)=>{
    try{
        //Authorization: Bearer <Auth Token>
        let token = req.headers.cookie.split("token=")[1].split(";")[0];
        let payload = jwt.verify(token,process.env.JWT_SECRET_TOKEN);
        let id = payload._id;
        req.id = id;
        return next();
    }
    catch(err){
        return next();
    }
}

module.exports = auth;