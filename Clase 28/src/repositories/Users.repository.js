import UserDTO from "../DTOs/User.dto.js";

class UsersRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async getAll() {
    try {
      console.log("desde el repository");
      return await this.dao.getAll();
    } catch (error) {
      throw error;
    }
  }

  async insert(userInfo) {
    try {
      console.log("desde el repository");
      const newUserInfo = new UserDTO(userInfo);

      return await this.dao.insert(newUserInfo);
    } catch (error) {
      throw error;
    }
  }
}

export default UsersRepository;
