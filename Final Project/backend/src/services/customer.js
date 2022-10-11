import Boom from '@hapi/boom';

import Customer from '../models/Customer.js';
import logger from '../utils/logger.js';
import { hash, compare } from '../utils/crypt.js';


/**
 * Create a new user.
 *
 * @param {Object} params
 * @return {Object}
 */
export async function createCustomer(params) {
  const { name, email, password, favorites } = params;

  const existingUser = await new Customer().findByParams({ email });

  if (existingUser) {
    logger.error('The email address is already taken');

    throw new Boom.badRequest('The email address is already taken');
  }

  const hashedPassword = hash(password);

  const [insertedData] = await new Customer().save({ name, email, password: hashedPassword ,favorites});

  return {
    data: insertedData,
    message: 'Added Customer successfully',
  };
}
/**
 * Login validation and token generation.
 *
 * @param {Object} params
 * @return {Object}
 */
 export async function login(params) {
  const { email, password } = params;

  const existingUser = await new Customer().findByParams({ email });
  console.log(existingUser);
  
  if (!existingUser) {
    logger.error('Invalid credentials: Could not find the associated email');

    throw new Boom.badRequest('Invalid credentials');
  }

  const doesPasswordMatch = compare(password, existingUser.password);
  console.log("ehat",doesPasswordMatch);

  if (!doesPasswordMatch) {
    logger.error('Invalid credentials: Password does not match');

    throw new Boom.badRequest('Invalid credentials');
  }

  const user = {
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
    currentUser: 'customer'
  };

  return {
    data: { user },
    message: 'Customer Logged in succesfully',
  };
}

/**
 * Get a list of all available Customers.
 *
 * @param {Object} [query]
 * @return {Object}
 */
 export async function getAllCustomers(query) {
  console.log(query);
  const customerNameFilter = query.customerName ? query.customerName.split(',') : [];

  logger.info('Fetching a list of all customers this');

  const customers = await new Customer().getAll();

  return {
    data: customers,
    message: 'List of customers'
  };
}

/**
 * Get details of a customer by the identifier.
 *
 * @param {string} id
 * @return {Object}
 */
export async function getCustomer(id) {
  logger.info(`Fetching customer with customerId ${id}`);

  const customer = await new Customer().getById(id);
  console.log("prro",customer);
  if (!customer) {
    logger.error(`Cannot find customer with customerId ${id}`);

    throw new Boom.notFound(`Cannot find customer with customerId ${id}`);
  }

  return {
    data: customer,
    message: `Details of customerId ${id}`
  };
}
