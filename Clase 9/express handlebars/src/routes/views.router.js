import express from "express";
const router = express.Router();

let foods = [
  { name: "Pizza", price: 10 },
  { name: "Hamburger", price: 5 },
  { name: "Hot dog", price: 3 },
  { name: "Taco", price: 2 },
  { name: "Choripan", price: 20 },
];

router.get("/", (req, res) => {
  let user = {
    name: "Pepe",
    lastname: "Perez",
    role: "admin",
  };
  res.render("index", {
    user,
    style: "styles.css",
    isAdmin: user.role === "admin",
    foods,
  });
});

export default router;
