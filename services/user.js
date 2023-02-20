const User = require("../models/user");

class UserService {
  async createUser(payload) {
    try {
      const { name, email, password, role } = payload;

      const userRecord = await this.getUserByEmail(email);

      if (userRecord) {
        throw new Error("User already exists");
      }

      const user = new User({ name, email, password, role });

      return await user.save();
    } catch (error) {
      throw error;
    }
  }

  async getUserByEmail(email) {
    return User.findOne({ email });
  }
}

module.exports = new UserService();
