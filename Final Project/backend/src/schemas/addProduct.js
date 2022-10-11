import Joi from 'joi';

const schema = Joi.object({
  product_name: Joi.string().max(100).required(),
  price: Joi.number().integer(),
  in_stock: Joi.number().integer(),
  description: Joi.string().max(1000).required(),
  category: Joi.string().max(100),
  rating: Joi.number().integer(),
  images: Joi.array().items(Joi.string())
});

export default schema;
