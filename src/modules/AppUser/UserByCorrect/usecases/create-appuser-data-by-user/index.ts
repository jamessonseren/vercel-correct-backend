import { AppUserAuthPrismaRepository } from "../../../AppUserManagement/repositories/implementations/app-user-auth-prisma.repository";
import { AppUserPrismaRepository } from "../../repositories/implementations/app-user-prisma.repository";
import { CreateAppUserDataByUserController } from "./create-appuser-data-by-user.controller";

const appUserRepository = new AppUserPrismaRepository()
const appUserAuthRepository = new AppUserAuthPrismaRepository()

const createAppUserDataController = new CreateAppUserDataByUserController(
    appUserRepository,
    appUserAuthRepository
)

export { createAppUserDataController }