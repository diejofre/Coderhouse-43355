import mongoose from "mongoose";
import usersModel from "./dao/mongo/models/Users.js";

const environment = async () => {
  const connection = await mongoose.connect(
    "mongodb+srv://diegojofre:coder@cluster0.ukizu0w.mongodb.net/?retryWrites=true&w=majority"
  );

  let result = await usersModel.insertMany([
    {
      first_name: "Pepe",
      last_name: "Sand",
      email: "pepe2@mail",
      gender: "Male",
    },
    {
      first_name: "Juan",
      last_name: "Perez",
      email: "juan2@mail",
      gender: "Male",
    },
    {
      first_name: "Maria",
      last_name: "Gomez",
      email: "maria2@mail",
      gender: "Female",
    },
  ]);

  console.log(result);

  connection.disconnect();
};

environment();
