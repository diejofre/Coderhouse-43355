import { Router } from "express";
import CustomErrors from "../utils/errors/Custom.errors.js";
import generateUserErrorInfo from "../utils/errors/Info.errors.js";
import EnumErrors from "../utils/errors/Enum.errors.js";

const router = Router();
const users = [];

router.get("/", (req, res) => {
  res.send({ status: "success", payload: users });
});

router.post("/", (req, res) => {
  const { first_name, last_name, age, email } = req.body;

  if (!first_name || !last_name || !email) {
    CustomErrors.createError({
      name: "User creation error",
      cause: generateUserErrorInfo({ first_name, last_name, email }),
      message: "Error trying to create user",
      code: EnumErrors.INVALID_TYPES_ERROR,
    });
  }

  const user = {
    first_name,
    last_name,
    age,
    email,
  };

  if (users.length === 0) {
    user.id = 1;
  } else {
    user.id = users[users.length - 1].id + 1;
  }

  users.push(user);

  res.json({ status: "success", payload: users });
});

export default router;
