module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/lambda.db3',
      },
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds',
      },
      useNullAsDefault: true
    },
  };