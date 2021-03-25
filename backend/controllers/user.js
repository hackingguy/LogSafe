const User = require('../models/user');

module.exports =  async(req,res)=>{
    if(!req.userID) return res.status(403).send({
        "error":"true",
        "message":"Authorization Token Needed"
    });
    let usr = await User.findOne({_id:req.userID}).select({password:0,__v:0});
    res.send(usr);
}