const Knex = require('knex')
const databaseName = require('../../../knexfile.js')['development']['connection']['database']
const connection = require('../../../knexfile.js')['development']['connection']
const client = require('../../../knexfile.js')['development']['client']

const knex = Knex({
    client: client,
    connection
})

async function main() { 
  // Lets create our database if it does not exist
  await knex.raw('DROP DATABASE IF EXISTS ??', databaseName)
  
}

main().catch(console.log).then(process.exit)