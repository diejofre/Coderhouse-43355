import { Router } from "express";
import { generateUser } from "../mocks/users.mock.js";

const router = Router();

router.get("/", (req, res) => {
  const users = [];
  for (let i = 0; i < 100; i++) {
    users.push(generateUser());
  }
  res.send(users);
});

export default router;
