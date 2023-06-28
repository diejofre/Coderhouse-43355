import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  edad: Number,
  email: {
    type: String,
    unique: true,
  },
});

export const userModel = mongoose.model(userCollection, userSchema);
