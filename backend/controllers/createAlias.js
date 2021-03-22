const Alias = require('../models/alias')

module.exports = async (req, res)=>{
    if(!req.objectID) return res.status(403).send({
        "error":"true",
        "message":"Authorization Token Not Found"
    });

    let alias = req.body["alias"];

    if(!alias) return res.status(400).send({
        "error":"true",
        "message":"Email Is Required"
    });

    let isExists = await Alias.isExists(alias);

    if(isExists) return res.status(400).send({
        "error":"true",
        "message":"Email Already Exists"
    })

    let mail = Alias.create({
        userID : req.id,
        alias:alias 
    });

    res.send({
        "error":"false",
        "message":"Email Added Successfully"
    });
}