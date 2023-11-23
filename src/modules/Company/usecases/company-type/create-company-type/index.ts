import { CompanyAdminPrismaRepository } from "../../../repositories/company-admin/implementations/company-admin.prisma.repository";
import { CompanyTypePrismaRepository } from "../../../repositories/company-type/implementatios/company-type.prisma.repository";
import { CreateCompanyTypeController } from "./create-company-type.controller";

const companyTypeRepository = new CompanyTypePrismaRepository()
const companyAdminRepository = new CompanyAdminPrismaRepository()

const companyTypeController = new CreateCompanyTypeController(
    companyAdminRepository,
    companyTypeRepository
)

export { companyTypeController }