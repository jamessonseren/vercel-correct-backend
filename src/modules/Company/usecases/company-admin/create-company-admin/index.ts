import { CompanyAdminPrismaRepository } from "../../../repositories/company-admin/implementations/company-admin.prisma.repository";
import { CreateCompanyAdminController } from "./create-company-admin.controller";

const companyAdminRepository = new CompanyAdminPrismaRepository()
const companyAdminController = new CreateCompanyAdminController(
    companyAdminRepository
)

export { companyAdminController }