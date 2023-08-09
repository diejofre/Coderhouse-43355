import { usersService } from "../services/index.js";

const getUsers = (req, res) => {
  const users = usersService.getAllUsers();
  res.send(users);
};

const saveUser = (req, res) => {
  const { id, first_name, last_name, email } = req.body;
  if (!id || !first_name || !last_name || !email) {
    res.status(400).send("Missing params");
  }
  const newUser = { id, first_name, last_name, email };
  usersService.createUser(newUser);
  res.sendStatus(201);
};

export default {
  getUsers,
  saveUser,
};
