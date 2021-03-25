const Alias = require('../models/alias');

module.exports =  async(req,res)=>{
    if(!req.userID) return res.send("/login");
    let id = req.userID;
    let alias = await Alias.model.find({userID:id});
    res.send(alias);
}