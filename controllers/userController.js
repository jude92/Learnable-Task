const userService = require("../services/user");

class UserController {
  async createUser(req, res) {
    const user = await userService.createUser(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  }

  async userLogin(req, res) {
    const token = await userService.userLogin(req.body);
    res.status(201).json({
      success: true,
      message: "User loggedIn successfully",
      data: token,
    });
  }
}

module.exports = new UserController();
