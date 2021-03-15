const mongoose = require('mongoose')
const schema = mongoose.Schema;

const aliasSchema = new schema({
    userID:{
        type:schema.ObjectId
    },
    mail:{
        type:String
    },
    blackList:[{
        type:String
    }],
    isActive:{
        type:Boolean
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
        let res = await this.model.findOne({mail:mail});
        return res;
    }
}



module.exports = new Alias("alias",aliasSchema);