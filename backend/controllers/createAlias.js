const Alias = require('../models/alias');
const User = require('../models/user')

module.exports = async (req, res)=>{
    if(!req.userID) return res.status(403).send({
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
        "message":"Alias Already Exists"
    })

    let user = await User.findById({_id:req.userID});

    let mail = await Alias.create({
        userID : req.userID,
        alias:alias,
        forwards:0,
        blocked:0,
        isActive:true
    });
    
    if(user.aliases.indexOf(mail)==-1){
        user.aliases.push(mail);
        await user.save();
    }
    
    res.send({
        "error":"false",
        "message":"Email Added Successfully"
    });
}