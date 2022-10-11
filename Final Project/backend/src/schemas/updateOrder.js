import Joi from 'joi';

const schema = Joi.object({
  order_remarks: Joi.string().max(50).optional(),
  quantity: Joi.number().integer().optional(),
  total: Joi.number().integer().optional(),
  status: Joi.string().max(50).optional()
});
console.log("schema",schema)
export default schema;