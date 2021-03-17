const User = require('../models/user');
const Alias = require('../models/alias');

module.exports =  async(req,res)=>{
    let id = req.objectID;
    const alias = await Alias.model.find({_id:req.id}).select({userID:0});
    res.send(alias);
}