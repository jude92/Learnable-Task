const { decodeJWT } = require("../utils/helper");

const authentication = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "User not authenticated",
      data: null,
    });
  }

  const data = decodeJWT(token);

  if (data) {
    return next(data.role);
  }

  throw new Error("Something bad happened");
};

const adminAccessRole = (role, req, res, next) => {
  if (role == "admin") {
    return next();
  }

  throw new Error("You cannot access this resource");
};

const adminGuestAccessRole = (role, req, res, next) => {
  if (role == "admin" || role == "guest") {
    return next();
  }

  throw new Error("You cannot access this resource");
};

module.exports = { authentication, adminAccessRole, adminGuestAccessRole };
