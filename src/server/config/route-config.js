(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const class = require('../routes/class');
    const user = require('../routes/user');
    // const instructor = require('../routes/instructor');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/classes', classes);
    app.use('/user', user);
    // app.use('/instructor', instructor);
  };

})(module.exports);
