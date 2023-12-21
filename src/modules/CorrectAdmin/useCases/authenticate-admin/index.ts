import { PasswordBCrypt } from "../../../../infra/shared/crypto/password.bcrypt";
import { JWTToken } from "../../../../infra/shared/crypto/token/CorrectAdmin/jwt.token";
import { CorrectAdminPrismaRepository } from "../../repositories/implementations/correct-admin.prisma.repository";
import { AuthenticateAdminController } from "./authenticate-admin.controller";

const adminPrismaRepository = new CorrectAdminPrismaRepository()
const passwordCrypto = new PasswordBCrypt()
const tokenGenerated = new JWTToken()

const authAdminController = new AuthenticateAdminController(
    adminPrismaRepository,
    passwordCrypto,
    tokenGenerated
)

export { authAdminController }