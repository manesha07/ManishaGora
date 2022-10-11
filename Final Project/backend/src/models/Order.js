import DBModel from './DBModel.js';

/**
 * Model for the 'manufacturers' table.
 *
 * @class Manufacturer
 */
class Orders extends DBModel {
  constructor() {
    super('order');
  }
}

export default Orders;