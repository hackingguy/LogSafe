const { string } = require('joi');
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
    }],
    isVerified:{
        type:Boolean
    },
    uniqueToken:{
        type:String
    },
    passwordResetToken:{
        type:String
    },
    resetTokenExpiry:{
        type:Date
    }
})

module.exports = mongoose.model('users',userSchema);