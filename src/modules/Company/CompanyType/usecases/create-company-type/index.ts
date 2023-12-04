import { CompanyAdminPrismaRepository } from "../../../CompanyAdmin/repositories/implementations/company-admin.prisma.repository";
import { CompanyTypePrismaRepository } from "../../repositories/implementatios/company-type.prisma.repository";
import { CreateCompanyTypeController } from "./create-company-type.controller";

const companyTypeRepository = new CompanyTypePrismaRepository()
const companyAdminRepository = new CompanyAdminPrismaRepository()

const companyTypeController = new CreateCompanyTypeController(
    companyAdminRepository,
    companyTypeRepository
)

export { companyTypeController }