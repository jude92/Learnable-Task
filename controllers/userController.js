const userService = require("../services/user");
const { expressResponse } = require("../utils/helper");

class UserController {
  async createUser(req, res) {
    try {
      const user = await userService.createUser(req.body);
      delete user.password;

      return expressResponse(res, 201, "User created successfully", true, {
        ...user.toJSON(),
        password: undefined,
      });
    } catch (err) {
      return expressResponse(res, 400, err.message);
    }
  }

  async userLogin(req, res) {
    try {
      const token = await userService.userLogin(req.body);

      return expressResponse(
        res,
        200,
        "User loggedIn successfully",
        true,
        token
      );
    } catch (err) {
      return expressResponse(res, 400, err.message);
    }
  }
}

module.exports = new UserController();
