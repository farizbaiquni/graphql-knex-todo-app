import knex from 'knex';

// Databse connection
const knexFile = require('../../knexfile').development;
export const dbConn = knex(knexFile);