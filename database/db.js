const mongoose = require("mongoose");
const { DB } = require("../config");

mongoose.set("strictQuery", false);

mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to the database");
  })
  .catch(() => {
    console.log(" error connecting to the database");
  });
