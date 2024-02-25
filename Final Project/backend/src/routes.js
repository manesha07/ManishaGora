import { Router } from 'express';

import loginSchema from './schemas/login.js';
import addProductSchema from './schemas/addProduct.js';
import addUserSchema from './schemas/addUser.js';
import addCustomerSchema from './schemas/addCustomer.js';
import addOrderSchema from './schemas/addOrder.js';
import updateProductSchema from './schemas/updateProduct.js';
import updateOrderSchema from './schemas/updateOrder.js';
import * as apiController from './controllers/api.js';
import * as productController from './controllers/products.js';
import * as userController from './controllers/user.js';
import * as customerController from './controllers/customer.js';
import * as orderController from './controllers/order.js';
import authenticate from './middleware/authenticate.js';
import getProductsQuerySchema from './schemas/getProductsQuery.js';
import { validateBody, validateQueryParams } from './middleware/validation.js';

const router = Router();

router.get('/', apiController.getAPIDetails);

router.get('/products', validateQueryParams(getProductsQuerySchema), productController.getProducts);

router.get('/products/:productIdentifier', productController.getProduct);

router.post('/products',authenticate,validateBody(addProductSchema), productController.saveProduct);

router.put('/products/:productIdentifier',authenticate, validateBody(updateProductSchema), productController.updateProduct);

router.delete('/products/:productIdentifier', authenticate,productController.removeProduct);

router.post('/users', validateBody(addUserSchema), userController.addUser);

router.post('/login', validateBody(loginSchema), userController.login);

router.post('/customerlogin', validateBody(loginSchema), customerController.login);

router.get('/customers', customerController.getCustomers);

router.get('/customers/:customerIdentifier', customerController.getCustomer);

router.post('/customers', validateBody(addCustomerSchema), customerController.addCustomer);

router.get('/orders', orderController.getOrders);

router.get('/orders/:orderIdentifier', orderController.getOrder);

router.post('/orders',validateBody(addOrderSchema), orderController.saveOrder);

router.put('/orders/:orderIdentifier', validateBody(updateOrderSchema), orderController.updateOrder);

router.delete('/orders/:orderIdentifier',orderController.removeOrder);

export default router;
