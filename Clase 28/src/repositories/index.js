import UsersDAO from "../dao/factory.js";
import UserRepository from "./Users.repository.js";

const usersRepository = new UserRepository(UsersDAO);

export default usersRepository;
