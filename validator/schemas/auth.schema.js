const joi = require("joi");

const registrationSchema = joi.object().keys({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  role: joi.string().optional(),
});

const loginSchema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

module.exports = { registrationSchema, loginSchema };
