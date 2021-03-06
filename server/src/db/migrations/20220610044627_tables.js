/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments('id').primary();
        table.string('name', 255).notNullable();
        table.string('email', 255).notNullable();
        table.string('address', 255).notNullable();
        table.string('phone', 255).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now())
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
    .createTable('todos', function (table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned()
        table.foreign('user_id').references('id').inTable('users').onDelete("CASCADE");
        table.string('title', 255).notNullable();
        table.text('body', 255).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('todos')
};
