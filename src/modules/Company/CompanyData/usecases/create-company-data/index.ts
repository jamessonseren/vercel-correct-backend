import { CompanyAdminPrismaRepository } from "../../../CompanyAdmin/repositories/implementations/company-admin.prisma.repository";
import { CompanyDataPrismaRepository } from "../../repositories/implementations/prisma/company-data-prisma.repository";
import { CreateCompanyDataController } from "./create-company-data.controller";

const companyDataRepository = new CompanyDataPrismaRepository()
const companyAdminRepository = new CompanyAdminPrismaRepository()

const companyDataController = new CreateCompanyDataController(
    companyDataRepository,
    companyAdminRepository
)

export { companyDataController }