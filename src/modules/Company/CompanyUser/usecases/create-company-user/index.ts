import { CompanyUserPrismaRepository } from "../../repositories/implementations/company-user.prisma.repository";
import { CreateCompanyUserController } from "./create-company-user.controller";

const companyUserRepository = new CompanyUserPrismaRepository()
const companyUserController = new CreateCompanyUserController(
    companyUserRepository
)

export { companyUserController }