import express from "express";
import { generateToken, verifyToken } from "./utils.js";

const app = express();

const users = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const exist = users.find((user) => user.email === email);
  if (exist) {
    res.send("User already exists");
  }
  users.push({
    name,
    email,
    password,
  });
  res.send("User created");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) {
    res.send("Invalid Credentials");
  }
  const access_token = generateToken(user);
  res.send({ status: "success", access_token });
});

app.get("/private", verifyToken, (req, res) => {
  res.send({ status: "Private Route", user: req.user });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
