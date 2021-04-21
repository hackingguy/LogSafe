const User = require('../models/user');
const Alias = require('../models/alias');
const sendMail = require('../utils/sendMail');

module.exports = async(req, res)=>{
    let body = req.body;
    res.send({"message":"Recieved Mail"});
    let to = body["to"];
    let subject = body["subject"];
    let from = body["from"];
    let html = body["text"];

    let alias = await Alias.isExists(to);
    if(!alias || !alias["isActive"]) return;
    let isBlackListed = await Alias.isBlackListed(from,alias);
    if(isBlackListed){
        alias["blocked"] = parseInt(alias["blocked"]) + 1;
        await alias.save();
        return;
    }
    let id = alias["userID"];
    let reciever = await User.findOne({_id:id});
    reciever = reciever["email"];
    const msg = {
        to: reciever,
        from: to,
        fromname:from.split("<")[0],
        subject: subject + ` (Sent By LogSafe)`,
        html: html + `\n\nRecieved From ${from}`,
    };
    let isSent = await sendMail(msg);
    if(isSent){
        alias["forwards"] =  parseInt(alias["forwards"]) + 1;
        await alias.save();
    }
}