import express from "express";
import userRouter from "./routes/user.router.js";
import mongoose from "mongoose";

const app = express();

mongoose.connect("your mongourl");

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(3000, () => {
  console.log("Server up on port 3000");
});
