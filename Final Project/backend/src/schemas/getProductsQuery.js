import Joi from 'joi';

const schema = Joi.object({
  product_name: Joi.string()
});

export default schema;