import { Router } from "express";
import passport from "passport";

const router = Router();

router.post(
  "/register",
  passport.authenticate("register", { failureRedirect: "/failureRedirect" }),
  async (req, res) => {
    res.send({ status: "success", message: "Usuario creado" });
  }
);

router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/failureRedirect" }),
  async (req, res) => {
    if (!req.user)
      return res.status(400).send({
        status: "failed",
        message: "Usuario o contraseña incorrectos",
      });
    req.session.user = req.user;
    res.send({ status: "success", payload: req.user });
  }
);

export default router;
