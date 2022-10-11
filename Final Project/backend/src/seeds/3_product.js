/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('product')
    .del()
    .then(() => {
      return knex('product').insert([
        {
          product_name: 'denim_pants',
          price: '1000',
          in_stock: '2',
          images :'url1',
          description: 'pants'
        }
      ]);
    });
}
