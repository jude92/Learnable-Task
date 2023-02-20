const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { HASGNUMBER } = require("../config");

const User = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name can not be empty"],
    maxLength: [20, "name can not be more than 20 characters"],
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "guest" },
});

User.pre("save", (next) => {
  bcrypt.genSalt(HASGNUMBER, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (error, hash) => {
      if (error) return next(error);
      this.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = (userPassword, cb) => {
  bcrypt.compare(userPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const UserModel = mongoose.model("user", User);
module.exports = UserModel;
