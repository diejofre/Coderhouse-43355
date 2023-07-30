import CustomRouter from "./router.js";

export default class UsersRouter extends CustomRouter {
  init() {
    this.get("/", ["PUBLIC"], (req, res) => {
      res.sendSucces("Hello from users router");
    });
  }
}
