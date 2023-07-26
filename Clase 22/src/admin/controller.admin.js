import { Router } from "express";
import authorization from "../middlewares/authorization.middlewares.js";
import passportCall from "../utils/passportCall.utils.js";

const router = Router();

router.get(
  "/private",
  passportCall("jwt"),
  authorization("superadmin"),
  (req, res) => {
    res.json({ message: "Si estás viendo esto es porque sos admin" });
  }
);

export default router;
