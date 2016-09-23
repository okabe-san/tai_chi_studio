(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const classes = require('../routes/classes');
    const users = require('../routes/users');
    const admin = require('../routes/admin');
    const instructors = require('../routes/instructors');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/classes', classes);
    app.use('/users', users);
    app.use('/admin', admin);
    app.use('/instructors', instructors);
  };

})(module.exports);
