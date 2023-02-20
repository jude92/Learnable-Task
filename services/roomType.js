const roomType = require("../models/roomType");

class RoomTypeServices {
  // create a room
  async createRoom(roomData) {
    return await RoomsModel.create(roomData);
  }

  // get many books
  async getAllRooms(filter = {}) {
    return await RoomsModel.find(filter);
  }
}

module.exports = new RoomTypeServices();
