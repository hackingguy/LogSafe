const Alias = require('../models/alias');
const User = require('../models/user');

module.exports =  async(req,res)=>{
    if(!req.userID) return res.status(403).send({
        "error":"true",
        "message":"Authorization Token Needed"
    });
    let body = req.body;
    let aliasMail = body["alias"];
    let user = await User.findOne({_id:req.userID});
    let alias =  await Alias.isExists(aliasMail);
    if(!alias||alias["userID"]!=req.userID) return res.send({"error":"true","message":"Alias Doesn't Exists"});
    await Alias.model.deleteOne({_id:alias["_id"]});
    let idx = user.aliases.indexOf(alias["_id"]);
    if(idx!=-1){
        user.aliases.splice(idx,1);
        await user.save();
    }
    res.send({
        "error":"false",
        "message":"Deleted Successfully"
    });
}