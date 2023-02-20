const RoomsModel = require("../models/room");

class RoomServices {
  // create a room
  async createRoom(roomData) {
    return await RoomsModel.create(roomData);
  }

  // edit a room
  async updateRoom(id, roomData) {
    return await RoomsModel.findByIdAndUpdate(
      id,
      {
        $set: { roomData },
      },
      { new: true }
    );
  }

  // delete a room
  async deleteRoom(id) {
    return await RoomsModel.findByIdAndDelete(id);
  }

  // get a room
  async getRoom(filter) {
    return await RoomsModel.findOne(filter);
  }

  // get many books
  async getAllRooms(filter) {
    const { search, roomType, minPrice, maxPrice } = filter;

    if (maxPrice && !minPrice) minPrice = 0;

    const query = [
      {
        $lookup: {
          from: "roomTypes",
          localField: "roomType",
          foriegnField: "_id",
          as: "_roomType",
        },
      },
      {
        $unwind: { path: "$_roomType", preserveNullAndEmptyArrays: true },
      },
    ];

    if (search) query.push({ $match: { name: search.toUpperCase() } });

    if (roomType) query.push({ $match: { _roomType: roomType } });

    if (maxPrice && minPrice) {
      query.push({
        $match: { $or: [{ price: { $gte: minPrice, $lte: maxPrice } }] },
      });
    } else if (maxPrice && !minPrice) {
      query.push({
        $match: { $or: [{ price: { $gte: 0, $lte: maxPrice } }] },
      });
    }

    query.push({
      $project: {
        name: "$name",
        roomType: "$_roomType.name",
        price: "$price",
      },
    });

    return await RoomsModel.aggregate(query);
  }
}

module.exports = new RoomServices();
