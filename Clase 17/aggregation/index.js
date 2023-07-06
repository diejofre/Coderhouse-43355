import mongoose from "mongoose";
import orderModel from "./models/order.js";

const environment = async () => {
  const connection = await mongoose.connect(
    "mongodb+srv://diegojofre:coder@cluster0.ukizu0w.mongodb.net/?retryWrites=true&w=majority"
  );

  // let result = await orderModel.insertMany([
  //   {
  //     name: "veggie",
  //     size: "medium",
  //     price: 10,
  //     quantity: 4,
  //     date: new Date(),
  //   },
  //   {
  //     name: "muza",
  //     size: "medium",
  //     price: 12,
  //     quantity: 2,
  //     date: new Date(),
  //   },
  //   {
  //     name: "napo",
  //     size: "medium",
  //     price: 15,
  //     quantity: 3,
  //     date: new Date(),
  //   },
  // ]);

  // console.log(result);

  let orders = await orderModel.aggregate([
    {
      $match: { size: "medium" },
    },
    {
      $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } },
    },
    {
      $sort: { totalQuantity: -1 },
    },
    {
      $group: { _id: 1, orders: { $push: "$$ROOT" } },
    },
    {
      $project: {
        _id: 0,
        orders: "$orders",
      },
    },
    {
      $merge: {
        into: "reports",
      },
    },
  ]);

  console.log("ORDERS", orders);
  connection.disconnect();
};

environment();
