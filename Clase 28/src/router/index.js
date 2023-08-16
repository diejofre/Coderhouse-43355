import usersController from "../controller/users.controller.js";

const router = (app) => {
  app.use("/users", usersController);
};

export default router;
