const router = require("express").Router();


const { createUser, userLogin } = require("../controllers/userController");
const { validate } = require("../validator/validator");
const {
  loginSchema,
  registrationSchema,
} = require("../validator/schemas/auth.schema");

router.post("/register", validate(registrationSchema), createUser);
router.post("/login", validate(loginSchema), userLogin);

module.exports = router;
