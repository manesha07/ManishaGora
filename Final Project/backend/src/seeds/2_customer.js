/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('customer')
    .del()
    .then(() => {
      return knex('customer').insert([
        {
          name: 'manisa',
          email: 'manisha@gmail.com',
          favorites: 'pants',
          password: '$2b$10$uir5P54aydy5u7rkuKJFp.tcyS0AK4JXT.2HRKYA/pUqIsWYSFHgy'
        }
      ]);
    });
}
