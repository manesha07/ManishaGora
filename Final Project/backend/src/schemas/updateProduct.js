import Joi from 'joi';

const schema = Joi.object({
  product_name: Joi.string().max(30).optional(),
  price: Joi.number().integer().optional(),
  in_stock: Joi.number().integer().optional(),
  description: Joi.string().max(50).optional(),
  images: Joi.object({
    added: Joi.array().items(Joi.string()).optional(),
    removed: Joi.array().items(Joi.string()).optional(),
  }).optional(),
  category: Joi.string().max(50).optional(),
  rating: Joi.number().integer().optional(),
});

export default schema;
