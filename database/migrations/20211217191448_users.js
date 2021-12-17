const { Knex } = require('knex');

/**
 * @param {Knex} knex
 */
exports.up = async knex => {
  await knex.schema.createTable('users', table => {
    table.increments('id');
    table.text('username').unique().notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async knex => {
  await knex.schema.dropTable('users');
};
