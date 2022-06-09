// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host : 'localhost',
        port : 3306,
        user : 'root',
        password : '',
        database : 'graphql_knex_todo_app'
      },
      migrations: {
        directory: __dirname + '/app/db/migrations',
      },
      seeds: {
        directory: __dirname + '/app/db/seeds',
      },
  },
};
