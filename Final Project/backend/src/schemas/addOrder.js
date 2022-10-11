import Joi from 'joi';

const schema = Joi.object({
  customer_id:  Joi.number().integer().optional(),
  product_id:Joi.number().integer().optional(),
  order_remarks: Joi.string().max(50).required(),
  quantity: Joi.number().integer().required(),
  total: Joi.number().integer().required(),
  status: Joi.string().max(50).required()
});

export default schema;