const User = require('../models/user')

module.exports =  async(req,res)=>{
    let id = req.objectID;
    let user = await User.findOne({_id:id});
    //Here I got only id of all mails
    let emails = user.aliases;
    /*
        @todo Fetching All From Database
    */
}