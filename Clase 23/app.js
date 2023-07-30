import express from "express";
import dictionaryRouter from "./routes/dictionary.router.js";
import UsersRouter from "./routes/users.router.js";
import SessionsRouter from "./routes/session.router.js";

const app = express();
app.use(express.json());

const usersRouter = new UsersRouter();
const sessionsRouter = new SessionsRouter();

app.use("/api/dictionary", dictionaryRouter);
app.use("/api/users", usersRouter.getRouter());
app.use("/api/sessions", sessionsRouter.getRouter());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
