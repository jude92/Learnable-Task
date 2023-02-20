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
}

module.exports = new UserController();
