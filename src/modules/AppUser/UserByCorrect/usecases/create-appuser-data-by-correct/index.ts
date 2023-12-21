
import { CompanyTypePrismaRepository } from "../../../../Company/CompanyType/repositories/implementatios/company-type.prisma.repository";
import { AppUserPrismaRepository } from "../../repositories/implementations/app-user-prisma.repository";
import { CreateAppUserByCorrectController } from "./create-appuser-data-by-correct.controller";

const companyTypeRepository = new CompanyTypePrismaRepository()
const appUserRepository = new AppUserPrismaRepository()

const createAppUserByCorrectController = new CreateAppUserByCorrectController(
    companyTypeRepository,
    appUserRepository
)

export { createAppUserByCorrectController }