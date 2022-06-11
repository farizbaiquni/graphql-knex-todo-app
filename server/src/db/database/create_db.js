const Knex = require('knex')
const client = require('../../knexfile')['development']['client']
const databaseName = require('../../knexfile.js')['development']['connection']['database']

const connection = {
  host: 'localhost',
  user: 'root',
  password: ''
}

let knex = Knex({
  client: client,
  connection
})

async function main() { 
  // Lets create our database if it does not exist
  await knex.raw('CREATE DATABASE IF NOT EXISTS ??', databaseName)
}

main().catch(console.log).then(process.exit)