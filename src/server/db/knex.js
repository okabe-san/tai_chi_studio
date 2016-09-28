const environment = process.env.NODE_ENV;
const config = process.env.DATABASE_URL || 'postgres://localhost/library' require('../../../knexfile.js')[environment];
module.exports = require('knex')(config);
