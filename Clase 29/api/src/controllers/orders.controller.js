import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import OrdersDAO from "../dao/Orders.dao.js";
import RestaurantsDAO from "../dao/Restaurants.dao.js";
import UsersDAO from "../dao/Users.dao.js";

const Orders = new OrdersDAO();
const Restaurants = new RestaurantsDAO();
const Users = new UsersDAO();
const router = Router();

router.get("/", async (req, res) => {
  try {
    const orders = await Orders.getAll();
    res.json({ status: "success", message: orders });
  } catch (error) {
    res.status(500).json({ status: "error", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Orders.getOne(id);
    res.json({ status: "success", message: order });
  } catch (error) {
    res.status(500).json({ status: "error", error });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      restaurant: restaurantId,
      user: userId,
      products: productsList,
    } = req.body;
    const number = uuidV4();
    const restaurant = await Restaurants.getOne(restaurantId);
    const user = await Users.getOne(userId);
    const productsValidate = restaurant.products.filter((product) =>
      productsList.includes(product.name)
    );
    const totalPrice = productsValidate.reduce(
      (acc, current) => acc + current.price,
      0
    );

    const newOrderInfo = {
      number,
      restaurant: restaurant._id,
      user: user._id,
      products: productsValidate,
      totalPrice,
    };
    const newOrder = await Orders.insert(newOrderInfo);
    res.json({ status: "success", message: newOrder });
  } catch (error) {
    res.status(500).json({ status: "error", error });
  }
});

router.patch("/", async (req, res) => {
  try {
    res.json({ status: "success", message });
  } catch (error) {
    res.status(500).json({ status: "error", error });
  }
});

export default router;
