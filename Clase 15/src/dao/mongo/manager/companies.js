import companyModel from "../models/company.js";

export default class CompaniesManager {
  getCompanies = () => {
    return companyModel.find().lean();
  };

  getCompany = (id) => {
    return companyModel.findById(id);
  };

  createCompany = (company) => {
    return companyModel.create(company);
  };

  updateCompany = (id, company) => {
    return companyModel.findByIdAndUpdate(id, company);
  };

  deleteCompany = (id) => {
    return companyModel.findByIdAndDelete(id);
  };
}
