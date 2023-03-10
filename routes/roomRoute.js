const router = require("express").Router();

const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getAllRooms,
} = require("../controllers/roomController");
const {
  adminAccessRole,
  adminGuestAccessRole,
  authentication,
} = require("../middlewares/authorization");
const { validate } = require("../validator/validator");
const {
  roomValidator,
  updateRoomValidator,
} = require("../validator/schemas/room.schema");

router.post(
  "/",
  [validate(roomValidator), authentication, adminAccessRole],
  createRoom
);
router.patch(
  "/:id",
  [validate(updateRoomValidator), authentication, adminAccessRole],
  updateRoom
);
router.delete("/:id", [authentication, adminAccessRole], deleteRoom);
router.get(
  "/:id",
  [authentication, adminAccessRole, adminGuestAccessRole],
  getRoom
);
router.get(
  "/",
  [authentication, adminAccessRole, adminGuestAccessRole],
  getAllRooms
);

module.exports = router;
