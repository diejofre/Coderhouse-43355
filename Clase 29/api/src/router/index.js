import usersController from "../controllers/users.controller.js";
import restaurantsController from "../controllers/restaurants.controller.js";
import ordersController from "../controllers/orders.controller.js";

const router = (app) => {
  app.use("/users", usersController);
  app.use("/restaurants", restaurantsController);
  app.use("/orders", ordersController);
};

export default router;
