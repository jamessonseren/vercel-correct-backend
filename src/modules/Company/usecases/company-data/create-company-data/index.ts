import { CompanyAdminPrismaRepository } from "../../../repositories/company-admin/implementations/company-admin.prisma.repository";
import { CompanyDataPrismaRepository } from "../../../repositories/company_data/implementations/prisma/company-data-prisma.repository";
import { CreateCompanyDataController } from "./create-company-data.controller";

const companyDataRepository = new CompanyDataPrismaRepository()
const companyAdminRepository = new CompanyAdminPrismaRepository()

const companyDataController = new CreateCompanyDataController(
    companyDataRepository,
    companyAdminRepository
)

export { companyDataController }