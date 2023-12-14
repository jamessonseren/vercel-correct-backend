import { CompanyAdminPrismaRepository } from "../../../CompanyAdmin/repositories/implementations/company-admin.prisma.repository";
import { CompanySecondaryUserPrismaRepository } from "../../repositories/implementations/company-secondary-user-prisma.repository";
import { CreateCompanySecondaryUserController } from "./create-company-secondary-user.controller";

const companyAdminRepository = new CompanyAdminPrismaRepository()
const companyUserRepository = new CompanySecondaryUserPrismaRepository()

const secondaryUserController = new CreateCompanySecondaryUserController(
    companyAdminRepository,
    companyUserRepository
)

export { secondaryUserController }