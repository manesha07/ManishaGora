/**
 * Create product_images table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
  return knex.schema.createTable('product_images', (table) => {
    table.increments('id').primary().unsigned();
    table.integer('product_id').references('id').inTable('product').notNull();
    table.string('image_url', 500).notNull();
    table.timestamp('created_at').default(knex.fn.now()).notNull();
  });
}

/**
 * Drop table product_images
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('product_images');
}
