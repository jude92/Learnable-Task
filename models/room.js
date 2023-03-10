const mongoose = require("mongoose");

const Rooms = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name can not be empty"],
    maxLength: [20, "name can not be more than 20 characters"],
  },
  price: { type: Number, required: true },
  roomType: {
    type: mongoose.Types.ObjectId,
    ref: "roomTypes",
    required: true,
  },
});

const roomsModel = mongoose.model("Rooms", Rooms);
module.exports = roomsModel;
