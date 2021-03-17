const Alias = require('../models/alias')

module.exports =  async(req,res)=>{
    if(!req.userID) return res.status(403).send({
        "error":"true",
        "message":"Authorization Token Invalid"
    });
    let body = req.body;
    let alias = body["alias"];
    let obj = await Alias.isExists(alias);
    if(!obj) 
        return res.send({
            "error":"true",
            "message":"Error Occurred"
        })
    obj.isActive = !obj.isActive;
    let message="";
    if(obj.isActive){
        message="Alias Activated Successfully!";
    }
    else{
        message="Alias Deactivated Successfully!";
    }
    await obj.save();
    res.send({
        "error":"false",
        "message":message
    })
}