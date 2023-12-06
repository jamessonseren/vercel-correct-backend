import { AppUserAuthPrismaRepository } from "../../../../AppUser/AppUserManagement/repositories/implementations/app-user-auth-prisma.repository";
import { CardsPrismaRepository } from "../../../../Cards/CardsByCorrect/repositories/implementations/cards-prisma.repository";
import { EmployerCardsPrismaRepository } from "../../../../Cards/EmployerCards/repositories/implementations/employer-card-prisma.repository";
import { AppUserAccountPrismaRepository } from "../../repositories/implementations/app-user-account-prisma.repository";
import { CreateAppUserAccountController } from "./create-app-user-account.controller";

const appUserAuthRepository = new AppUserAuthPrismaRepository()
const cardsRepository = new CardsPrismaRepository()
const userAccountRepository = new AppUserAccountPrismaRepository()
const employerCardRepository = new EmployerCardsPrismaRepository()

const appUserAccountController = new CreateAppUserAccountController(
    appUserAuthRepository,
    cardsRepository,
    userAccountRepository,
    employerCardRepository
)

export { appUserAccountController }