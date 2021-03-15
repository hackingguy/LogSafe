const Alias = require('../models/alias')

module.exports = async(req,res)=>{
    let body = req.body;
    let mail = body["mail"];
    let blackList = body["blackList"];
    let obj = await Alias.model.findOne({mail:mail});
    blackList.forEach(e=>{
        obj.blackList.push(e);
    });
    await obj.save();
    res.send({
        "error":"false",
        "message":"Added To BlackList"
    })
}