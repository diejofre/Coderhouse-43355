import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("restaurants controller");
});

export default router;
