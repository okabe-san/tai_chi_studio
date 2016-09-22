module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'studio'
    },
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  }
};
