const RoomsModel = require("../models/room");

class RoomServices {
  // create a room
  async createRoom(roomData) {
    return await RoomsModel.create(roomData);
  }

  // edit a room
  async updateRoom(id, roomData) {
    console.log("-----> ", id, roomData);
    return await RoomsModel.findByIdAndUpdate(
      id,
      {
        $set: { ...roomData },
      },
      { new: true }
    );
  }

  // delete a room
  async deleteRoom(id) {
    return await RoomsModel.findByIdAndDelete(id);
  }

  // get a room
  async getRoom(id) {
    const result = await RoomsModel.findById(id)
      .populate("roomType", "name -_id")
      .lean();

    return {
      ...result,
      ...{ roomType: result.roomType.name },
    };
  }

  // get a room
  async getRoomByName(name) {
    return await RoomsModel.findOne({ name });
  }

  // get many books
  async getAllRooms(filter) {
    const { search, roomType, minPrice, maxPrice } = filter;
    if (maxPrice && !minPrice) minPrice = 0;

    const query = [
      {
        $lookup: {
          from: "roomtypes",
          localField: "roomType",
          foreignField: "_id",
          as: "_roomType",
        },
      },
      {
        $unwind: { path: "$_roomType", preserveNullAndEmptyArrays: true },
      },
    ];

    if (search)
      query.push({ $match: { name: { $regex: search, $options: "$i" } } });

    if (roomType)
      query.push({
        $match: { "_roomType.name": { $regex: roomType, $options: "$i" } },
      });

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
