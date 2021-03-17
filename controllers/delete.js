const User = require('../models/user');
const Alias = require('../models/alias');

module.exports =  async(req,res)=>{
    if(!req.id) return res.status(403).send({
        "error":"true",
        "message":"Authorization Token Needed"
    });
    let body = req["body"];
    let aliasMail = body["alias"];
    let alias_obj =  await Alias.isExists(aliasMail);
    if(!alias_obj) return;
    await Alias.model.deleteOne({_id:alias_obj["_id"]});
    res.send({
        "error":"false",
        "message":"Deleted Successfully"
    })
}