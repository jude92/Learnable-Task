const router = require("express").Router();
const {
  createRoomType,
  getAllRoomType,
} = require("../controllers/roomTypeController");
const {
  authentication,
  adminAccessRole,
} = require("../middlewares/authorization");

const { validate } = require("../validator/validator");
const { roomTypeValidation } = require("../validator/schemas/roomType.schema");

router.get("/", [authentication, adminAccessRole], getAllRoomType);
router.post(
  "/",
  [validate(roomTypeValidation), authentication, adminAccessRole],
  createRoomType
);

module.exports = router;
