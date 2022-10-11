import Joi from 'joi';

/**
 * Validate request body.
 *
 * @param {Object} schema
 * @return {Function}
 */
export function validateBody(schema) {
  return function (req, res, next) {
    try {
      console.log("body",req.body);
      Joi.assert(req.body, schema, { abortEarly: false });

      next();
    } catch (err) {
      console.log("errror",err);
      next(err);
    }
  };
}

/**
 * Validate request query params.
 *
 * @param {Object} schema
 * @return {Function}
 */
export function validateQueryParams(schema) {
  return function (req, res, next) {
    try {
      console.log(req.query);
      Joi.assert(req.query, schema, { abortEarly: false });

      next();
    } catch (err) {
      next(err);
    }
  };
}
