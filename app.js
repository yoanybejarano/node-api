const express = require('express'),
      consign = require('consign'),
      morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

consign()
      .include("db.js")
      .then("models")
      .then("libs/middlewares.js")
      .then("routes")
      .then("libs/boot.js")
      .into(app);
