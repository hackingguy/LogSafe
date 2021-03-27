require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');

const frontendRoutes = require('./routes/frontend');
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

if(process.env.NODE_ENV==="development")
    app.use(cors({ origin:process.env.FRONTEND_URL ,credentials:true }));

//Serving Front End
app.use(frontendRoutes);
app.use(express.static(path.join(__dirname, '../frontend/build')));


//Private Endpoint
app.use('/api/inbound',recieveMailRoute);


//Public 
app.use('/api',indexRoute);
app.use(authRoute);
app.use('/api/user',userRoute);
app.use('/api/create-alias', createMailRoute);
app.use('/api/blacklist',addBlacklistRoute);
app.use('/api/toggle-alias',toggleMailRoute);
app.use('/api/get-aliases',getEmailsRoute);
app.use('/api/delete-alias',deleteAliasRouter);
app.use('/api/verify',emailVerificationRouter);
app.use('/api/reset',resetRoute);

app.use((req,res)=>{
    res.sendFile(path.join(__dirname+'/../frontend/build/index.html'));
})

app.use('/api/*',(req,res)=>{
    res.send({
        "error":"true",
        "message":"Method Not Implemented"
    });
})

module.exports = app;