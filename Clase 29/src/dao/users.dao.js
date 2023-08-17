import User from "./models/user.model.js";

class UsersDAO {
  constructor() {}

  async getUsers() {
    try {
      return await User.find({});
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async saveUser(user) {
    try {
      return await User.create(user);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default UsersDAO;
