(function() {

  'use strict';

  var passport = require('passport');
  //var LocalStrategy = require('passport-local').Strategy;
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var path = require('path');

  // *** dependencies *** //
  const express = require('express');
  const appConfig = require('./config/main-config.js');
  const routeConfig = require('./config/route-config.js');
  const errorConfig = require('./config/error-config.js');

  // *** express instance *** //
  const app = express();

  app.use(require('express-session')({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false
    }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(path.join(__dirname, 'public')));

  // *** config *** //
  appConfig.init(app, express);
  routeConfig.init(app);
  errorConfig.init(app);

  module.exports = app;
}());
