const joi = require("joi");

const roomValidator = (req, res) => {
  const schema = joi.object().keys({
    name: joi.string().required(),
    price: joi.number().required(),
    roomType: joi.string().hex().length(24),
  });

  const result = schema.validate(req.body, { abortEarly: false });

  if (result.error) {
    return res.status(400).json({ validation: result.error.details });
  }

  if (!req.value) req.value = {};
  if (!req.value["body"]) req.value["body"] = {};

  req.value["body"] = result.value;
  next();
};

const updateRoomValidator = (req, res) => {
  const schema = joi.object().keys({
    name: joi.string().optional(),
    price: joi.number().optional(),
    roomType: joi.string().hex().length(24).optional(),
  });

  const result = schema.validate(req.body, { abortEarly: false });

  if (result.error) {
    return res.status(400).json({ validation: result.error.details });
  }

  if (!req.value) req.value = {};
  if (!req.value["body"]) req.value["body"] = {};

  req.value["body"] = result.value;
  next();
};

const roomTypeValidation = (req, res) => {
  const schema = joi.object().keys({
    name: joi.string().required(),
  });

  const result = schema.validate(req.body, { abortEarly: false });

  if (result.error) {
    return res.status(400).json({ validation: result.error.details });
  }

  if (!req.value) req.value = {};
  if (!req.value["body"]) req.value["body"] = {};

  req.value["body"] = result.value;
  next();
};

const userRegistrationValidation = (req, res) => {
  const schema = joi.object().keys({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    role: joi.string().options(),
  });

  const result = schema.validate(req.body, { abortEarly: false });

  if (result.error) {
    return res.status(400).json({ validation: result.error.details });
  }

  if (!req.value) req.value = {};
  if (!req.value["body"]) req.value["body"] = {};

  req.value["body"] = result.value;
  next();
};

const userLoginValidation = (req, res) => {
  const schema = joi.object().keys({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  const result = schema.validate(req.body, { abortEarly: false });

  if (result.error) {
    return res.status(400).json({ validation: result.error.details });
  }

  if (!req.value) req.value = {};
  if (!req.value["body"]) req.value["body"] = {};

  req.value["body"] = result.value;
  next();
};

module.exports = {
  roomValidator,
  updateRoomValidator,
  roomTypeValidation,
  userRegistrationValidation,
  userLoginValidation,
};
