const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    aliases:[{
        type:String
    }]
})

module.exports = mongoose.model('users',userSchema);