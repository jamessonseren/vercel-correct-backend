<<<<<<< HEAD
=======
import { CorrectAdminPrismaRepository } from "../../../../CorrectAdmin/repositories/implementations/correct-admin.prisma.repository";
>>>>>>> correct-nodejs-backend/main
import { CompanyUserPrismaRepository } from "../../../CompanyUser/repositories/implementations/company-user.prisma.repository";
import { CompanyDataPrismaRepository } from "../../repositories/implementations/prisma/company-data-prisma.repository";
import { CreateCompanyDataController } from "./create-company-data.controller";

const companyDataRepository = new CompanyDataPrismaRepository()
const companyUserRepository = new CompanyUserPrismaRepository()
<<<<<<< HEAD

const companyDataController = new CreateCompanyDataController(
    companyDataRepository,
    companyUserRepository
=======
const correctAdminRepository = new CorrectAdminPrismaRepository()

const companyDataController = new CreateCompanyDataController(
    companyDataRepository,
    companyUserRepository,
    correctAdminRepository
>>>>>>> correct-nodejs-backend/main
)

export { companyDataController }