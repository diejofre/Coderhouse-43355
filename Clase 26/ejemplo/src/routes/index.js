import { Router } from "express";
import usersRouter from "./users.router.js";
import toysRouter from "./toys.router.js";

const router = Router();

router.use("/users", usersRouter);
router.use("/toys", toysRouter);

export default router;
