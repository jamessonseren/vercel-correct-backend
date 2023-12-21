import { CompanyUserPrismaRepository } from "../../../CompanyUser/repositories/implementations/company-user.prisma.repository";
import { CompanyTypePrismaRepository } from "../../repositories/implementatios/company-type.prisma.repository";
import { CreateCompanyTypeController } from "./create-company-type.controller";

const companyTypeRepository = new CompanyTypePrismaRepository()
const companyUserRepository = new CompanyUserPrismaRepository()

const companyTypeController = new CreateCompanyTypeController(
    companyUserRepository,
    companyTypeRepository
)

export { companyTypeController }