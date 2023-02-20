const joi = require("joi");

const roomValidator = joi.object().keys({
  name: joi.string().required(),
  price: joi.number().required(),
});
