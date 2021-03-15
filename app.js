require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const indexRoute = require('./routes/index');
const authRoute = require('./routes/auth');
const createMailRoute = require('./routes/createMail'); 
const recieveMailRoute = require('./routes/recieveMail');
const addBlacklistRoute = require('./routes/blackList');
const deactivateMailRoute = require('./routes/deactivate');
const sendMailRoute = require('./routes/sendMail');
const getEmailsRoute = require('./routes/getEmails');
const dashboardRoute = require('./routes/dashboard');

//Connecting To Database
connectDB();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

//Private Endpoint
//AWS IP-Range
app.use('/recieve-mail',recieveMailRoute);

//Public 
app.use('/', indexRoute);
app.use(authRoute);
app.use('/create-mail', createMailRoute);
app.use('/addBlacklist',addBlacklistRoute);
app.use('/deactivate-mail',deactivateMailRoute);
app.use('/send-mail',sendMailRoute);
app.use('/get-emails',getEmailsRoute);
app.use('/dashboard',dashboardRoute);

module.exports = app;
