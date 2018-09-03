const express = require('express'),
    consign = require('consign'),
    morgan = require('morgan');


var app = express();
app.use(morgan('dev'));

consign()
    .include("config/db.js")
    .then("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);

var configView = require('./config/views');
app = configView(app);

/*Test*/
// consign({verbose: false})
//     .include("libs/config.js")
//     .include("db.js")
//     .then("models")
//     .then("libs/middlewares.js")
//     .then("routes")
//     .then("libs/boot.js")
//     .into(app);

//module.exports = app;
