/**
 * Create table_name table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('product', (table) => {
    table.increments('id').primary().unsigned();
    table.string('product_name', 300);
    table.integer('price').notNull();
    table.string('description', 1000);
    table.string('category', 70);
    table.string('images', 500).notNull();
    table.string('rating', 50);
    table.integer('in_stock').notNull();
    table.timestamp('created_at').default(knex.fn.now()).notNull();
    table.timestamp('updated_at').default(knex.fn.now()).notNull();
  });
}

/**
 * Drop table_name cars
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('product');
}
