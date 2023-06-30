import { Router } from "express";
import CompaniesManager from "../dao/mongo/manager/companies.js";

const router = Router();
const companiesManager = new CompaniesManager();

router.get("/", async (req, res) => {
  const companies = await companiesManager.getCompanies();
  res.json({ status: "ok", data: companies });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const company = await companiesManager.getCompany(id);
  res.json({ status: "ok", data: company });
});

router.post("/", async (req, res) => {
  const { name, address, city, country, email } = req.body;
  if (!name || !address || !city || !country || !email) {
    return res.status(400).json({ status: "error", message: "No data sent!" });
  }
  const company = req.body;
  const createdCompany = await companiesManager.createCompany(company);
  res.status(201).json({ status: "ok", data: createdCompany });
});

router.put("/:id", async (req, res) => {
  const { name, address, city, country, email } = req.body;
  if (!name || !address || !city || !country || !email) {
    return res.status(400).json({ status: "error", message: "No data sent!" });
  }
  const { id } = req.params;
  const newCompany = req.body;
  await companiesManager.updateCompany(id, newCompany);
  res.json({ status: "ok", data: newCompany });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await companiesManager.deleteCompany(id);
  res.sendStatus(204);
});

export default router;
