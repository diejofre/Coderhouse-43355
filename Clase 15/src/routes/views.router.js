import { Router } from "express";
import CompaniesManager from "../dao/mongo/manager/companies.js";

const router = Router();
const companiesManager = new CompaniesManager();

router.get("/", async (req, res) => {
  const companies = await companiesManager.getCompanies();
  res.render("companies", { companies });
});

export default router;
