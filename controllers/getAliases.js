const Alias = require('../models/alias');

module.exports =  async(req,res)=>{
    let id = req.id;
    let alias = await Alias.model.find({userID:id}).select({userID:0});
    res.send(alias);
}