import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoConnect = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
};

export default mongoConnect;
