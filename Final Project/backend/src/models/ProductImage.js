import DBModel from './DBModel.js';

/**
 * Model for the 'product_images' table.
 *
 * @class productImage
 */
class ProductImage extends DBModel {
  constructor() {
    super('product_images');
  }
}

export default ProductImage;

