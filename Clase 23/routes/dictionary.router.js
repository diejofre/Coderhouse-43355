import { Router } from "express";

const router = Router();

router.param("word", (req, res, next, word) => {
  req.word = word;
  next();
});

router.get("/:word", (req, res) => {
  console.log(req.word);
  res.send(`You searched for method GET: ${req.word}`);
});

router.post("/:word", (req, res) => {
  res.send(`You searched for method POST:  ${req.word}`);
});

export default router;
