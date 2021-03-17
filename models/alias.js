const mongoose = require('mongoose')
const schema = mongoose.Schema;

const aliasSchema = new schema({
    userID:{
        type:String
    },
    alias:{
        type:String
    },
    blackList:[{
        type:String
    }],
    isActive:{
        type:Boolean
    },
    forwards:{
        type:Number
    },
    blocked:{
        type:Number
    }
});


class Alias {
    constructor(document,schema){
        this.document = document;
        this.schema = schema;
        this.model = mongoose.model(document,schema);
    }

    async create(obj){
        let alias = new this.model(obj);
        await alias.save();
    }

    async isExists(mail){
        let res = await this.model.findOne({alias:mail});
        return res;
    }

    async isBlackListed(from,alias){
        if(!alias) return true;
        let blacklist = alias.blacklist;
        if(blacklist.indexOf(from)!=-1) return true;
        return false;
    }

}



module.exports = new Alias("alias",aliasSchema);