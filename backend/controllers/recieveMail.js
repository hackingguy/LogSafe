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
    alias["forwards"] =  parseInt(alias["forwards"]) + 1;
    const msg = {
        to: reciever,
        from: to,
        subject: subject + ` (Sent By LogSafe)`,
        html: html + `\n\nRecieved From ${from}`,
    };
    await sendMail(msg);
    await alias.save();
}