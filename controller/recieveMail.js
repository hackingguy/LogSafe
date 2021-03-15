/*
@todo mailparser,aliases->blackList->userID->User->mail-> Subject(Sent By ___) ->send
*/

const mongoose  = require('mongoose');
const User = require('../model/user');
const Alias = require('../model/alias');
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
    let subject = req["subject"];
    let body = req["body"];
    let attachments = req["attachments"];

    //AWS-SDK



}

