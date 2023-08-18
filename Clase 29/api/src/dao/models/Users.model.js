import mongoose from "mongoose";

const collectionName = "users";

const collectionSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: {
    type: String,
    default: "user",
  },
  orders: {
    type: [
      {
        order: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "order",
        },
      },
    ],
    default: [],
  },
});

const Users = mongoose.model(collectionName, collectionSchema);

export default Users;
