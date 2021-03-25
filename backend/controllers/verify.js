const User = require('../models/user');

module.exports =  async(req,res)=>{
    if(!req.params.token) return res.send({
        "error":"true",
        "message":"Invalid Token"
    });
    let token = req.params.token;
    let user = await User.findOne({uniqueToken:token});
    if(!user||user["isVerified"]){
        return res.send({
            "error":"true",
            "message":"Invalid Token"
        });
    }
    user.isVerified = true;
    await user.save();
    res.send({
        "error":"false",
        "message":"Email  Verified Successfully"
    });
}