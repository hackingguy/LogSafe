const Alias = require('../models/alias')

module.exports = async (req, res)=>{
    if(!req.objectID) return res.status(403).send({
        "error":"true",
        "message":"Authorization Token Not Found"
    });

    let mail = req.body["mail"];

    if(!mail) return res.status(400).send({
        "error":"true",
        "message":"Email Is Required"
    });

    let isExists = Alias.isExists(mail);

    if(isExists) return res.status(400).send({
        "error":"true",
        "message":"Email Already Exists"
    })

    let mail = Alias.create({
        userID : req.objectID,
        mail:mail 
    });

    res.send({
        "error":"false",
        "message":"Email Added Successfully"
    });
}