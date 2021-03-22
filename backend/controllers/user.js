const User = require('../models/user');

module.exports =  async(req,res)=>{
    if(!req.id) return res.status(403).send({
        "error":"true",
        "message":"Authorization Token Needed"
    });
    let usr = await User.findOne({_id:req.id}).select({name:1,mail:1});
    res.send(usr);
}