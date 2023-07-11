import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser("codersecret"));

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/setCookie", (req, res) => {
  res
    .cookie("CoderCookie", "Esta es un cookie muy sabrosa", {
      maxAge: 100000,
      signed: true,
    })
    .send("Cookie");
});

app.get("/getCookies", (req, res) => {
  res.send(req.signedCookies);
});

app.get("/deleteCookie", (req, res) => {
  res.clearCookie("CoderCookie").send("Cookie eliminada");
});

app.listen(3000, () => {
  console.log("Server up on port 3000");
});
