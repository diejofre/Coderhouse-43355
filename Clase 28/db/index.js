import { connect } from "mongoose";
import { dbUser, dbPassword, dbHost, dbName } from "../src/config/db.config.js";

const mongoConnect = async () => {
  try {
    await connect(
      `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`
    );
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
};

export default mongoConnect;
