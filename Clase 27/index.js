import MongoSingleton from "./MongoSingleton.js";

const mongoInstance = MongoSingleton.getInstance();
const mongoInstance2 = MongoSingleton.getInstance();
