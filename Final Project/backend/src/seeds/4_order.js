/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('order')
    .del()
    .then(() => {
      return knex('order').insert([
        {
          customer_id: 1,
          product_id: 1,
          order_remarks: 'nice quality',
          quantity: 2,
          status: 'pending',
          total:2000
        }
      ]);
    });
}
