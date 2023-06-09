import express from "express";
const router = express.Router();

const products = [
  { name: "TV", price: 1000 },
  { name: "PC", price: 1500 },
  { name: "Phone", price: 500 },
];

router.get("/products", (req, res) => {
  res.json(products);
});

export default router;
