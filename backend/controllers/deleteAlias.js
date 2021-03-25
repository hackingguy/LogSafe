const Alias = require('../models/alias');


module.exports =  async(req,res)=>{
    if(!req.userID) return res.status(403).send({
        "error":"true",
        "message":"Authorization Token Needed"
    });
    let body = req.body;
    let aliasMail = body["alias"];
    let alias =  await Alias.isExists(aliasMail);
    if(!alias||alias["userID"]!=req.userID) return res.send({"error":"true","message":"Alias Doesn't Exists"});
    await Alias.model.deleteOne({_id:alias["_id"]});
    res.send({
        "error":"false",
        "message":"Deleted Successfully"
    });
}