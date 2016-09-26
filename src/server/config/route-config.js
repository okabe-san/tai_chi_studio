(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const classes = require('../routes/classes');
    const users = require('../routes/users');
    // const instructor = require('../routes/instructor');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/classes', classes);
    app.use('/users', users);
    // app.use('/instructor', instructor);
  };

})(module.exports);
