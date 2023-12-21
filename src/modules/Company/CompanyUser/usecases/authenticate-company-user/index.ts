import { PasswordBCrypt } from "../../../../../infra/shared/crypto/password.bcrypt";
import { CompanyAdminJWToken } from "../../../../../infra/shared/crypto/token/CompanyAdmin/jwt.token";
import { CompanyUserPrismaRepository } from "../../repositories/implementations/company-user.prisma.repository";
import { AuthenticateCompanyAdminController } from "./authenticate-company-user.controller";

const companyUserRepository = new CompanyUserPrismaRepository()
const passwordCrypto = new PasswordBCrypt()
const tokenGenerated = new CompanyAdminJWToken()

const authCompanyUserController = new AuthenticateCompanyAdminController(
    companyUserRepository,
    passwordCrypto,
    tokenGenerated
)

export { authCompanyUserController }