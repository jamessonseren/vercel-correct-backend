import { AppUserAuthPrismaRepository } from "../../repositories/AppUserAuth/implementations/app-user-auth-prisma.repository";
import { AppUserPrismaRepository } from "../../repositories/AppUserData/implementations/app-user-prisma.repository";
import { CreateAppUserByUserController } from "./create-appuser-by-user.controller";

const appUserAuthPrismaRepository = new AppUserAuthPrismaRepository()
const appUserDataPrismaRepository = new AppUserPrismaRepository()

const createAppUserByUserController = new CreateAppUserByUserController(
    appUserAuthPrismaRepository,
    appUserDataPrismaRepository
)

export { createAppUserByUserController }