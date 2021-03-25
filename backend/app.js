require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const indexRoute = require('./routes/index');
const authRoute = require('./routes/auth');
const createMailRoute = require('./routes/createAlias'); 
const recieveMailRoute = require('./routes/recieveMail');
const addBlacklistRoute = require('./routes/blacklist');
const toggleMailRoute = require('./routes/toggleAlias');
const getEmailsRoute = require('./routes/getAliases');
const userRoute = require('./routes/user');
const resetRoute = require('./routes/reset');
const deleteAliasRouter = require('./routes/deleteAlias');
const emailVerificationRouter = require('./routes/verify');
//Connecting To Database
connectDB();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Private Endpoint
app.use('/inbound',recieveMailRoute);

//Public 
app.use('/', indexRoute);
app.use(authRoute);
app.use('/user',userRoute);
app.use('/create-alias', createMailRoute);
app.use('/blacklist',addBlacklistRoute);
app.use('/toggle-alias',toggleMailRoute);
app.use('/get-aliases',getEmailsRoute);
app.use('/delete-alias',deleteAliasRouter);
app.use('/verify',emailVerificationRouter);
app.use('/reset',resetRoute);

//404 Error
app.use((req,res)=>{
    res.status(404).send({
        "error":"true",
        "message":"Method Not Implemented"
    });
})
module.exports = app;