/**
 * Create table_name table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('customer', (table) => {
    table.increments('id').primary().unsigned();
    table.string('name', 50).notNull();
    table.string('email', 100).unique().notNull();
    table.string('password', 200).notNull();
    table.string('favorites', 200).default(null);
    table.timestamp('created_at').default(knex.fn.now()).notNull();
  });
}

/**
 * Drop table_name cars
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('customer');
}
