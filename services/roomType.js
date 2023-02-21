const RoomType = require("../models/roomType");

class RoomTypeServices {
  // create a room
  async createRoom(roomData) {
    return await RoomType.create(roomData);
  }

  // get many books
  async getAllRooms(filter = {}) {
    return await RoomType.find(filter);
  }
}

module.exports = new RoomTypeServices();
