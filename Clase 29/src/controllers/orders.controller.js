import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("orders controller");
});

export default router;
