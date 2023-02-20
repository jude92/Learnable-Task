const roomTypeService = require("../services/roomType");

class RoomTypeController {
  async createRoomType(req, res) {
    const { body } = req;
    const roomtype = await roomTypeService.createRoom(body);
    res.status(201).json({
      success: true,
      message: "Room Type created successfully",
      data: roomtype,
    });
  }

  async getAllRoomType(req, res) {
    const roomtypes = await roomTypeService.getAllRooms();
    res.status(200).json({
        success: true,
        message: "Room Types fetched successfully",
        data: roomtypes,
      });
  }
}

module.exports = new RoomTypeController();
