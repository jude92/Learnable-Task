const router = require("express").Router();

const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getAllRooms,
} = require("../controllers/roomController");

router.post("/", createRoom);
router.patch("/:id", updateRoom);
router.delete("/:id", deleteRoom);
router.get("/:id", getRoom);
router.get("/", getAllRooms);

module.exports = router;
