import mongoose from "mongoose";

const collectionName = "restaurants";

const collectionSchema = new mongoose.Schema({
  name: String,
  products: [],
});

const Restaurants = mongoose.model(collectionName, collectionSchema);

export default Restaurants;
