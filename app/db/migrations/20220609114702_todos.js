/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('todos', function (table) {
        table.increments('id');
        table.uuid('user_id').notNullable().references('id').inTable('Users')
        table.string('title', 255).notNullable();
        table.string('body', 255).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now())
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable("todos")
};
