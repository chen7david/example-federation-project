const env = require('./config').db

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: env.host,
      port: env.port,
      database: env.db_name,
      user:     env.user,
      password: env.pass
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/models/migrations/'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};