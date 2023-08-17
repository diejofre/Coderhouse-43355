import usersController from "../controllers/users.controller.js";
import restaurantsController from "../controllers/restaurants.controller.js";
import ordersController from "../controllers/orders.controller.js";

const router = (app) => {
  app.use("/api/users", usersController);
  app.use("/api/restaurants", restaurantsController);
  app.use("/api/orders", ordersController);
};

export default router;
