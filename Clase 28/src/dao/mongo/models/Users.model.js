import { Schema, model } from "mongoose";

const collectionName = "users";

const collectionSchema = new Schema({
  first_name: String,
  last_name: String,
  email: {
    unique: true,
    type: String,
  },
  phone: String,
  status: Boolean,
  role: String,
});

const Users = model(collectionName, collectionSchema);

export default Users;
