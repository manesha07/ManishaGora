import * as customerService from '../services/customer.js';

/**
 * Controller to add a new user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function addCustomer(req, res, next) {
  customerService
    .createCustomer(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller for customer login.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function login(req, res, next) {
  console.log("customer",req.body);
  customerService
    .login(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
    {console.log("this",err)}
    next(err)
 });
}

/**
 * Controller to get details of all customers.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function getCustomers(req, res, next) {
  console.log("pc",req.query);
  customerService
    .getAllCustomers(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get details of a customer.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getCustomer(req, res, next) {
  console.log("pccroduct1",req.params);
  customerService
    .getCustomer(+req.params.customerIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}


