import DBModel from './DBModel.js';

/**
 * Model for the 'users' table.
 *
 * @class User
 */
class Customer extends DBModel {
  constructor() {
    super('customer');
  }
}

export default Customer;
