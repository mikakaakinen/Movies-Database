var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var index = require('./routes/index');
var users = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

//Import the mongoose module
var mongoose = require("mongoose");

var database = {
    url: "ds014808.mlab.com:14808",
    name: "elokuvat_database",
    user: "MikaKaakinen",
    password: "o5lglNOWuF",
};

var loginCredentials = database.user + ":" + database.password;

var db = mongoose;

db.connect("mongodb://" + loginCredentials + "@" + database.url + "/" + database.name + "?authSource=elokuvat_database&w=1");

db.connection.on("open", function() {
    console.log("connection to database done!");
});

db.connection.on("error", function() {
    console.log("error");
});

//Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

var p = new Promise( (resolve, reject) => {
    reject( Error("Error!") );
  } );
  
  p.then(value => {console.log(value);});
  
  process.on('unhandledRejection', e => {
    console.error(e);
  });

module.exports = app;
