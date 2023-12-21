import { CompanyUserPrismaRepository } from "../../repositories/implementations/company-user.prisma.repository";
import { CompanyUserDetailsController } from "./company-user-details.controller";

const companyUserRepository = new CompanyUserPrismaRepository()
const companyUserDetailsController = new CompanyUserDetailsController(companyUserRepository)

export { companyUserDetailsController }