import { Router } from "express";
import UsersDAO from "../dao/users.dao.js";

const router = Router();
const userDAO = new UsersDAO();

router.get("/", async (req, res) => {
  try {
    const users = await userDAO.getUsers();
    res.json({ status: "success", data: users });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await userDAO.saveUser(req.body);
    res.json({ status: "success", data: user });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

export default router;
