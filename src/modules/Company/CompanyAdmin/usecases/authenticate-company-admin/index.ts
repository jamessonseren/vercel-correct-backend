import { PasswordBCrypt } from "../../../../../infra/shared/crypto/password.bcrypt";
import { CompanyAdminJWToken } from "../../../../../infra/shared/crypto/token/CompanyAdmin/jwt.token";
import { CompanyAdminPrismaRepository } from "../../repositories/implementations/company-admin.prisma.repository";
import { AuthenticateCompanyAdminController } from "./authenticate-company-admin.controller";

const companyAdminRepository = new CompanyAdminPrismaRepository()
const passwordCrypto = new PasswordBCrypt()
const tokenGenerated = new CompanyAdminJWToken()

const authCompanyAdminController = new AuthenticateCompanyAdminController(
    companyAdminRepository,
    passwordCrypto,
    tokenGenerated
)

export { authCompanyAdminController }