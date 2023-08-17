import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  number: String,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [],
  totalPrice: Number,
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
