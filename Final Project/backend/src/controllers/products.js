import * as productService from '../services/products.js';

/**
 * Controller to get details of all products.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getProducts(req, res, next) {
  console.log("pc",req.query);
  productService
    .getAllProducts(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get details of a product.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getProduct(req, res, next) {
  console.log("pccroduct1",req.params);
  productService
    .getProduct(+req.params.productIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get add new product record.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function saveProduct(req, res, next) {
  console.log("hiffff",req.body);
  productService
    .addProduct(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get update the details of a product.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function updateProduct(req, res, next) {
  productService
    .updateProduct(+req.params.productIdentifier, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get remove a product record.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function removeProduct(req, res, next) {
  console.log("reee",req.params);
  productService
    .removeProduct(+req.params.productIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
