import authController from "../auth/controller.auth.js";
import adminController from "../admin/controller.admin.js";

const router = (app) => {
  app.use("/auth", authController);
  app.use("/admin", adminController);
};

export default router;
