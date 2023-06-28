import { Router } from "express";
import { userModel } from "../models/user.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    let users = await userModel.find();
    res.json({ status: "success", payload: users });
  } catch (error) {
    console.log("Cannot get users:" + error);
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const user = await userModel.findById(id);
    res.json({ result: "success", payload: user });
  } catch (error) {
    console.log("Cannot get user:" + error);
  }
});

router.post("/", async (req, res) => {
  const { first_name, last_name, edad, email } = req.body;
  if (!first_name || !last_name || !edad || !email)
    return res.json({ status: "error", error: "Datos incompletos" });
  try {
    const result = await userModel.create({
      first_name,
      last_name,
      edad,
      email,
    });
    return res.json({ status: "success", payload: result });
  } catch (error) {
    console.log("Cannot create user:" + error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, edad, email } = req.body;
  if (!first_name || !last_name || !edad || !email)
    return res.json({ status: "error", error: "Datos incompletos" });
  const newUser = {
    first_name,
    last_name,
    edad,
    email,
  };
  try {
    const result = await userModel.updateOne({ _id: id }, newUser);
    return res.json({ status: "success", payload: result });
  } catch (error) {
    console.log("Cannot update user:" + error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await userModel.deleteOne({ _id: id });
    return res.json({ status: "success", payload: result });
  } catch (error) {
    console.log("Cannot delete user:" + error);
  }
});

export default router;
