import { AppUserPrismaRepository } from "../../../UserByCorrect/repositories/implementations/app-user-prisma.repository";
import { AppUserAuthPrismaRepository } from "../../repositories/implementations/app-user-auth-prisma.repository";
import { CreateAppUserByUserController } from "./create-appuser-by-user.controller";

const appUserAuthPrismaRepository = new AppUserAuthPrismaRepository()
const appUserDataPrismaRepository = new AppUserPrismaRepository()

const createAppUserByUserController = new CreateAppUserByUserController(
    appUserAuthPrismaRepository,
    appUserDataPrismaRepository
)

export { createAppUserByUserController }