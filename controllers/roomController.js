const room = require("../services/room");

class roomControlls {
  // create room
  async createRoom(req, res) {
    const reqBody = req.body;

    const existingRoom = await room.getRoom({
      name: reqBody.name.toUpperCase(),
    });

    if (existingRoom) {
      return res.status(403).json({
        success: false,
        message: "room already exist",
      });
    }

    reqBody.name = reqBody.name.toUpperCase();
    console.log(reqBody);
    const newRoom = await room.createRoom(reqBody);

    res.status(201).json({
      success: true,
      message: "romm created successfully",
      data: newRoom,
    });
  }

  // update room
  async updateRoom(req, res) {
    const { body } = req;
    const updatedRoom = await room.updateRoom(req.params.id, body);

    return res.status(200).json({
      success: true,
      message: "room updatedsuccessfully",
      data: updatedRoom,
    });
  }
  // delete a room
  async deleteRoom(req, res) {
    const roomToDelete = await room.deleteRoom(req.params.id);

    return res.status(200).json({
      success: true,
      message: " room deleted successfully",
      data: roomToDelete,
    });
  }

  // get a room
  async getRoom(req, res) {
    const query = req.query;
    const room = await room.getRoom(JSON.parse(query));

    res.status(200).json({
      success: true,
      message: " room succeessfully retrieved",
      data: room,
    });
  }

  // get all rooms
  async getAllrooms(req, res) {
    const query = JSON.parse(req.query) || {};
    const allRooms = await room.getAllRooms(query);

    res.status(200).json({
      success: true,
      message: "suucess with all rooms",
      data: allRooms,
    });
  }
}
module.exports = new roomControlls();
