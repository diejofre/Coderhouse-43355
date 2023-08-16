import { Router } from "express";
import userService from "../repositories/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await userService.getAll();
    res.json({ status: "success", message: users });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUserInfo = req.body;

    const user = await userService.insert(newUserInfo);

    res.json({ status: "success", message: user });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});

export default router;
