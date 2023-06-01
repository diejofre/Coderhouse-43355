import { Router } from "express";

const router = Router();

const pets = [
  {
    id: 1,
    nombre: "Rocko",
    edad: 14,
  },
  {
    id: 2,
    nombre: "Mily",
    edad: 12,
  },
];

router.get("/", (req, res) => {
  res.json(pets);
});

export default router;
