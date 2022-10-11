import Boom from '@hapi/boom';

import Orders from '../models/Order.js';
import logger from '../utils/logger.js';

/**
 * Get a list of all available orders.
 *
 * @param {Object} [query]
 * @return {Object}
 */
 export async function getAllOrders(query) {
  console.log(query);

  logger.info('Fetching a list of all orders here');

  const orders = await new Orders().getAll();

  return {
    data: orders,
    message: 'List of orders'
  };
}

/**
 * Get details of a order by the identifier.
 *
 * @param {string} id
 * @return {Object}
 */
export async function getOrder(id) {
  logger.info(`Fetching order with orderId ${id}`);

  const order = await new Orders().getOrderDetail(id);

  if (!order) {
    logger.error(`Cannot find order with orderId ${id}`);

    throw new Boom.notFound(`Cannot find order with orderId ${id}`);
  }

  return {
    data,
    message: `Details of orderId ${id}`
  };
}

/**
 * Create a new order record.
 *
 * @param {Object} params
 * @return {Object}
 */
export async function addOrder(params) {
  logger.debug('Payload received', params);
  console.log("pppp",params);
  const orderTableInsertParams = {
    customerId:params.customer_id,
    productId:params.product_id,
    orderRemarks:params.order_remarks,
    quantity:params.quantity,
    total: params.total,
    status:"pending"
  };

  logger.info('Checking if similar record already exists');
  console.log(params.id);

  const existingData = await new Orders().findByParams(orderTableInsertParams);

  if (existingData) {
    logger.error('Data with the same payload already exists');

    throw new Boom.badRequest('Data with the same payload already exists');
  }

  logger.info('Saving the new order data');

  const [orderTableInsertedData] = await new Orders().save(orderTableInsertParams);

  logger.info('Retreiving the saved order details');
  const data = await new Orders().getAll(orderTableInsertedData.id);

  return {
    data,
    message: 'Added the record successfully'
  };
}

/**
 * Update existing order record.
 *
 * @param {string} id
 * @param {Object} params
 * @return {Object}
 */
export async function updateOrder(id, params) {
  logger.info(`Checking the existence of order with id ${id}`);

  const order = await new Orders().getById(id);

  if (!order) {
    logger.error(`Cannot find order with id ${id}`);

    throw new Boom.notFound(`Cannot find order with id ${id}`);
  }

  logger.info(`Updating the data for order id ${id}`);

  await new Orders().updateById(id, {
    orderName: params.orderName,
    horsepower: params.horsepower
  });

  logger.info(`Fetching the updated data for order id ${id}`);

  const updatedData = await new Orders().getOrderDetails(id);

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
export async function removeOrder(id) {
  logger.info(`Checking if order with id ${id} exists`);

  const order = await new Orders().getById(id);

  if (!order) {
    logger.error(`Cannot delete order with id ${id} because it doesn't exist`);

    throw new Boom.notFound(`Cannot delete order with id ${id} because it doesn't exist`);
  }
  await new Orders().removeById(id);

  return {
    message: 'Record removed successfully'
  };
}
