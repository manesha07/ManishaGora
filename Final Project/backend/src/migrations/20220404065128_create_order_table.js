/**
 * Create table_name table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('order', (table) => {
    table.increments('id').primary().unsigned();
    table.integer('customer_id').references('id').inTable('customer').notNull();
    table.integer('product_id').references('id').inTable('product').notNull();
    table.string('order_remarks', 50);
    table.integer('quantity').notNull();
    table.integer('total').notNull();
    table.string('status', 20).notNull();
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
  return knex.schema.dropTable('order');
}
