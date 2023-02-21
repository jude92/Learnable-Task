const router = require("express").Router();
const {
  createRoomType,
  getAllRoomType,
} = require("../controllers/roomTypeController");
const {
  authentication,
  adminAccessRole,
} = require("../middlewares/authorization");

router.get("/", [authentication, adminAccessRole], getAllRoomType);
router.post("/", [authentication, adminAccessRole], createRoomType);

module.exports = router;
