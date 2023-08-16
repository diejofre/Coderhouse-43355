import { Router } from "express";
import { Post, User } from "../models/index.js";

const router = Router();

router.get("/", (req, res) => {
  User.findAll({ include: { model: Post } }).then((users) => {
    res.send(users);
  });
});

router.get("/:username", (req, res) => {
  const { username } = req.params;
  User.findOne({ where: { username } }).then((user) => res.send(user));
});

export default router;
