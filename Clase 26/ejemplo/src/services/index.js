import userService from "./users.service.js";
import UserMemoryManager from "../dao/usersMemoryManager.js";

export const usersService = new userService(new UserMemoryManager());
