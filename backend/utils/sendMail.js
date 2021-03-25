const sgmail = require('../config/sendgrid');

module.exports = async(msg)=>{
    try{
        await sgmail.send(msg)
        return true;
    }
    catch(err){
        return false;
    }
}