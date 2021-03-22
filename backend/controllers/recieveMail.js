const User = require('../model/user');
const Alias = require('../models/alias');
const sendMail = require('../utils/sendMail');

module.exports = async(req, res)=>{
    let from = req["from"];
    let to = req["to"];
    let subject = req["subject"];
    let body = req["body"];
    let attachments = req["attachments"];
    res.send({"message":"Recieved Mail"});

    let alias = await Alias.isExists(to);
    if(!alias) return;
    let isBlackListed = Alias.isBlackListed(from,alias);
    if(isBlackListed){
        alias["blocked"] = parseInt(alias["blocked"]) + 1;
        await alias.save();
        return;
    }
    let id = alias["userID"];
    let reciever = await User.findOne({_id:id});
    alias["forwards"] =  parseInt(alias["forwards"]) + 1;
    await sendMail(to,reciever["email"],body,subject);
    await alias.save();
}