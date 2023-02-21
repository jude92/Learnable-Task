const userService = require("../services/user");

class UserController {
  async createUser(req, res) {
    try {
      const user = await userService.createUser(req.body);
      delete user.password;
      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: { ...user.toJSON(), password: undefined },
      });
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async userLogin(req, res) {
    try {
      const token = await userService.userLogin(req.body);
      res.status(201).json({
        success: true,
        message: "User loggedIn successfully",
        data: token,
      });
    } catch (err) {
      return res.status(404).send(err.message);
    }
  }
}

module.exports = new UserController();
