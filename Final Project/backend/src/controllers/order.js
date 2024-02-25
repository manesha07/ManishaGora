import * as orderService from '../services/order.js';


/**
 * Controller to get details of all orders.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function getOrders(req, res, next) {
  console.log("pc",req.query);
  orderService
    .getAllOrders(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
/**
 * Controller to get details of a Order.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getOrder(req, res, next) {
  orderService
    .getOrder(+req.params.orderIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get add new order record.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function saveOrder(req, res, next) {
  console.log("ooo",req.body);
  orderService
    .addOrder(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get update the details of a order.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function updateOrder(req, res, next) {
  orderService
    .updateOrder(+req.params.orderIdentifier, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get remove a order record.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function removeOrder(req, res, next) {
  orderService
    .removeOrder(+req.params.orderIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
