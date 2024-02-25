import Boom from '@hapi/boom';

import Products from '../models/Products.js';
import Order from '../models/Order.js';
import logger from '../utils/logger.js';
import ProductImage from '../models/ProductImage.js';

/**
 * Get a list of all available Products.
 *
 * @param {Object} [query]
 * @return {Object}
 */
export async function getAllProducts(query) {
  console.log(query);
  const productNameFilter = query.productName ? query.productName.split(',') : [];

  logger.info('Fetching a list of all products this');

  const products = await new Products().getAllProducts();

  const parsedProducts = products.map((product) => ({
    ...product,
    images: product.images ? product.images.split(',') : []
  }));

  let filteredProducts = parsedProducts;

  if (productNameFilter.length) {
    filteredProducts = parsedProducts.filter((product) => productNameFilter.includes(product.productName));
  }

  return {
    data: filteredProducts,
    message: 'List of products'
  };
}

/**
 * Get details of a product by the identifier.
 *
 * @param {string} id
 * @return {Object}
 */
export async function getProduct(id) {
  logger.info(`Fetching product with productId ${id}`);

  const product = await new Products().getProductDetails(id);
  console.log("prro",product);
  if (!product) {
    logger.error(`Cannot find product with productId ${id}`);

    throw new Boom.notFound(`Cannot find product with productId ${id}`);
  }

  const parsedProduct = {
    ...product,
    images: product.images ? product.images.split(',') : []
  };

  console.log(parsedProduct);

  return {
    data: parsedProduct,
    message: `Details of productId ${id}`
  };
}

/**
 * Create a new product record.
 *
 * @param {Object} params
 * @return {Object}
 */
export async function addProduct(params) {
  logger.debug('Payload received', params);

  console.log("addproduct",params)
  const productTableInsertParams = {
    productName: params.product_name,
    price: params.price,
    category:params.category,
    rating:params.rating,
    inStock: params.in_stock,
    description: params.description,
    images: params.images
  };

  logger.info('Checking if similar record already exists');

  const existingData = await new Products().findByParams(productTableInsertParams);

  if (existingData) {
    logger.error('Data with the same payload already exists');

    throw new Boom.badRequest('Data with the same payload already exists');
  }

  logger.info('Saving the new product data');
  console.log("newdata1",productTableInsertParams);
  const [productTableInsertedData] = await new Products().save(productTableInsertParams);
  console.log("newdata",productTableInsertedData);

  if (params.images.length) {
    logger.info('Creating insert data for product_images table');
    const productImagesInsertData = params.images.map((url) => ({
      productId: productTableInsertedData.id,
      imageUrl: url
    }));

    logger.info(`Inserting ${productImagesInsertData.length} records into the product_images table`);
    productImagesInsertData.forEach(async (insertData) => {
      await new ProductImage().save(insertData);
    });
  }

  logger.info('Retreiving the saved product details');
  const data = await new Products().getProductDetails(productTableInsertedData.id);

  return {
    data,
    message: 'Added the record successfully'
  };
}

/**
 * Update existing product record.
 *
 * @param {string} id
 * @param {Object} params
 * @return {Object}
 */
export async function updateProduct(id, params) {
  logger.info(`Checking the existence of product with id ${id}`);

  const product = await new Products().getById(id);

  if (!product) {
    logger.error(`Cannot find product with id ${id}`);

    throw new Boom.notFound(`Cannot find product with id ${id}`);
  }

  logger.info(`Updating the data for product id ${id}`);

  await new Products().updateById(id, {
    productName: params.product_name,
    price: params.price,
    category:params.category,
    rating:params.rating,
    inStock: params.in_stock,
    description: params.description,
    images: params.images
  });

  // If we want to deal with images, we have two approaches:
  // 1. Using the same update endpoint for product images as well -> Appropriate handler
  // 2. Using a separate endpoint(API) altogether

  console.log("images",params.images.added,params.images.removed);
  if (params.images?.added?.length) {
    params.images.added.forEach(async (url) => {
      console.log("urlll",url);
      await new ProductImage().save({ productId:id, imageUrl: url });
    });
  }

  if (params.images?.removed?.length) {
    params.images.removed.forEach(async (url) => {
      console.log("urlll2",url);
      await new ProductImage().removeByParams({ productId:id, imageUrl: url });
    });
  }

  logger.info(`Fetching the updated data for product id ${id}`);

  const updatedData = await new Products().getProductDetails(id);
  console.log("updateddataaaaa",updatedData);

  return {
    data: updatedData,
    message: 'Record updated successfully'
  };
}

/**
 * Remove an existing record based on the identifier.
 *
 * @param {string} id
 * @return {Object}
 */
export async function removeProduct(id) {
  logger.info(`Checking if product with id ${id} exists`);

  const product = await new Products().getById(id);
  console.log("l",product)

  if (!product) {
    logger.error(`Cannot delete product with id ${id} because it doesn't exist`);

    throw new Boom.notFound(`Cannot delete product with id ${id} because it doesn't exist`);
  }

  await new ProductImage().removeByParams({ productId: id });
  await new Order().removeByParams({ productId: id });
  await new Products().removeById(id);
  return {
    message: 'Record removed successfully'
  };
}

// GET /products/1 => Get details of productId 1

// GET /Products/1/images => Get only the images of productId 1

// GET /products/1/images/2 => Get image 2 of productId 1

// PUT /products/1 => Only the data required to update products => manufacturerId, productName, horsepower

// DELETE /products/1/images/2 => Delete image 2 for productId 1
// POST /products/1/images => Add new image
