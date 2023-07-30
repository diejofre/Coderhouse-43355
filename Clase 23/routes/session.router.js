import CustomRouter from "./router.js";
import jwt from "jsonwebtoken";

export default class SessionsRouter extends CustomRouter {
  init() {
    this.post("/login", ["PUBLIC"], async (req, res) => {
      const user = {
        email: req.body.email,
        role: req.body.role,
      };
      const token = jwt.sign(user, "coderSecret");
      res.sendSuccess({ token });
    });

    this.get("/current", ["USER", "ADMIN"], async (req, res) => {
      res.sendSuccess({ user: req.user });
    });
  }
}
