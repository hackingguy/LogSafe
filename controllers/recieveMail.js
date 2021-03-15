const User = require('../model/user');
const Alias = require('../models/alias');
const sendMail = require('../utils/sendMail');

/*
{
    from: email.from.text,
    subject: email.subject,
    body: email.text,
    attachments: JSON.stringify(email.attachments)
}
*/

module.exports = async(req, res)=>{
    let from = req["from"];
    let to = req["to"];
    let subject = req["subject"];
    let body = req["body"];
    let attachments = req["attachments"];
    res.send({"message":"Recieved Mail"});

    let id = await Alias.getUserID(to);
    let reciever = await User.getEmail(id);
    await sendMail(to,reciever,body,subject);
}

