require('dotenv').config();
var express = require('express');
var connectDB = require('./config/db');
var path = require('path');

var indexRouter = require('./routes/index');
var createMailroute = require('./routes/createMail'); 
var recieveMailRoute = require('./routes/recieveMail');
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
app.use('/', indexRouter);
app.use(authRouter);
app.use('/create-mail', createMailroute);
app.use('/addBlacklist',addBlacklistRouter);
app.use('/deactivate-mail',deactivateMail);
app.use('/send-mail',sendMail);
app.use('/get-emails',getEmailsRouter);
app.use('/dashboard',dashboardRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
