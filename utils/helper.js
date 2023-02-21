const jwt = require("jsonwebtoken");
const { SECRET } = require("../config");

const signJWT = (userId, userRole) => {
  try {
    return jwt.sign({ userId, userRole }, SECRET, { expiresIn: "1hr" });
  } catch (error) {
    throw error;
  }
};

const decodeJWT = (token) => {
  try {
    const payload = jwt.verify(token, SECRET);
    return payload;
  } catch (error) {
    throw error;
  }
};

module.exports = { signJWT, decodeJWT };
