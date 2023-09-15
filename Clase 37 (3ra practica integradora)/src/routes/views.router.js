import { Router } from "express";
import Users from "../dao/dbManagers/users.js";
import Courses from "../dao/dbManagers/courses.js";

const usersManager = new Users();
const coursesManager = new Courses();

const router = Router();

router.get("/users", async (req, res) => {
  let users = await usersManager.getAll();
  res.render("users", { users });
});

router.get("/courses", async (req, res) => {
  let courses = await coursesManager.getAll();
  res.render("courses", { courses });
});

export default router;
