const router = require("express").Router();

const { createUser, userLogin } = require("../controllers/userController");
const {
  userLoginValidation,
  userRegistrationValidation,
} = require("../validator/validator");

router.post("/auth/register", userRegistrationValidation, createUser);
router.post("/auth/login", userLoginValidation, userLogin);

module.exports = router;
