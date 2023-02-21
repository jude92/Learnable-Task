const User = require("../models/user");
const { signJWT } = require("../utils/helper");

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

  async userLogin(data) {
    try {
      const { email, password } = data;

      const user = await this.getUserByEmail(email);

      if (!user) {
        throw new Error("User does not exist");
      }

      const isVaalidPassword = await user.comparePassword(password);

      if (!isVaalidPassword) {
        throw new Error("Invalid password");
      }

      const token = signJWT(user.id, user.role);

      return token;
    } catch (error) {
      throw new Error("User not found");
    }
  }
}

module.exports = new UserService();
