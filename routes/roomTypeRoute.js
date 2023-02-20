const router = require("express").Router();
const {
    createRoomType,
    getAllRoomType,
  } = require("../controllers/roomTypeController");

  router.get("/", getAllRoomType)
  router.post("/", createRoomType)

  module.exports = router;