import mongoose from "mongoose";

const collectionName = "orders";

const collectionSchema = new mongoose.Schema({
  number: String,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "restaurants",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  products: [],
  totalPrice: Number,
});

collectionSchema.pre("find", function () {
  this.populate("restaurant").populate("user");
});

const Orders = mongoose.model(collectionName, collectionSchema);

export default Orders;
