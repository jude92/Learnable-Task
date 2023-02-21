const joi = require("joi");

const roomTypeValidation = joi.object().keys({
  name: joi.string().required(),
});

module.exports = { roomTypeValidation };
