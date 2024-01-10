import { CompanyDataPrismaRepository } from "../../../CompanyData/repositories/implementations/prisma/company-data-prisma.repository";
import { CompanyAddressPrismaRepository } from "../../repositories/implemenatios/company-address-prisma.repository";
import { CreateCompanyAddressController } from "./crate-company-address.controller";

const companyAddressRepository = new CompanyAddressPrismaRepository()
const companyDataRepository = new CompanyDataPrismaRepository()

const createCompanyAddressController = new CreateCompanyAddressController(
    companyAddressRepository,
    companyDataRepository
)

export { createCompanyAddressController }