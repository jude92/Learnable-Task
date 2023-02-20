const jwt = require("jsonwebtoken");
const { SECRET } = require("../config");

const signJWT = async (userId, userRole) => {
  try {
    return jwt.sign({ userId, userRole }, SECRET, { expiresIn: "1hr" });
  } catch (error) {
    throw error;
  }
};

const decodeJWT = async (token) => {
  try {
    const payload = jwt.verify(token, SECRET);
    return payload;
  } catch (error) {
    throw error;
  }
};

module.exports = { signJWT, decodeJWT };