import { PasswordBCrypt } from "../../../../../infra/shared/crypto/password.bcrypt";
import { CompanySecondaryUserJWTToken } from "../../../../../infra/shared/crypto/token/CompanySecondaryUser/jwt.token";
import { CompanySecondaryUserPrismaRepository } from "../../repositories/implementations/company-secondary-user-prisma.repository";
import { AuthenticateCompanySecondaryUserController } from "./authenticate-company-secondary-user.controller";

const companyUserRepository = new CompanySecondaryUserPrismaRepository()
const passwordCrypto = new PasswordBCrypt()
const token = new CompanySecondaryUserJWTToken()

const authCompanyUserContorller = new AuthenticateCompanySecondaryUserController(
    companyUserRepository,
    passwordCrypto,
    token
)
export { authCompanyUserContorller }