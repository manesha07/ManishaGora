import DBModel from './DBModel.js';
import getAllProductsQuery from '../db/queries/getAllProductsQuery.js';
import getProductDetailsQuery from '../db/queries/getProductDetailQuery.js';
/**
 * Model for the 'manufacturers' table.
 *
 * @class Manufacturer
 */
class Products extends DBModel {
  constructor() {
    super('product');
  }

  getAllProducts() {
    return this.query(getAllProductsQuery);
  }

  async getProductDetails(productId) {
    const details = await this.query(getProductDetailsQuery, { productId });
    console.log("detaul",details);

    return details || null;
  }
}

export default Products;