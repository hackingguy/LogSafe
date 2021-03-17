const Alias = require('../models/alias')

module.exports = async(req,res)=>{
    if(!req.userID) return res.status(403).send({
        "error":"true",
        "message":"Authorization Token Invalid"
    });
    let body = req.body;
    let alias = body["alias"];
    let blackList = body["blackList"];
    let obj = await Alias.isExists(alias);
    blackList.forEach(e=>{
        obj.blackList.push(e);
    });
    await obj.save();
    res.send({
        "error":"false",
        "message":"Added To BlackList"
    })
}