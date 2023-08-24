import express from "express";
import userRouter from "./routes/users.router.js";

const app = express();
app.use("/api/users", userRouter);

app.listen(3001, () => {
  console.log("Server up");
});
