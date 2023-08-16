import mongoConnect from "../../db/index.js";
import { persistence } from "../config/app.config.js";

let usersDAO;

switch (persistence) {
  case "memory":
    const { default: MemoryDAO } = await import("./memory/Users.memory.js");
    usersDAO = new MemoryDAO();
    break;
  case "mongo":
    mongoConnect();
    const { default: MongoDAO } = await import("./mongo/Users.mongo.js");
    usersDAO = new MongoDAO();
    break;
}

export default usersDAO;
