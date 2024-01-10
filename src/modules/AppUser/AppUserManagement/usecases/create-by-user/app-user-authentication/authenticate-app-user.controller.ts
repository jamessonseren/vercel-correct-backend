import { Request, Response } from "express";
import { IPasswordCrypto } from "../../../../../../crypto/password.crypto";
import { IAppUserToken } from "../../../../../../infra/shared/crypto/token/AppUser/token";
import { IAppUserAuthRepository } from "../../../repositories/app-use-auth-repository";
import { AuthenticateAppuserUsecase } from "./authenticate-app-user.usecase";

export class AuthenticateAppUserController {

    constructor(
        private appUserRepository: IAppUserAuthRepository,
        private passwordCrypto: IPasswordCrypto,
        private token: IAppUserToken

    ) { }

    async handle(req: Request, res: Response) {

        try {
            const { cpf, password } = req.body

            const authAppUserUsecase = new AuthenticateAppuserUsecase(
                this.appUserRepository,
                this.passwordCrypto,
                this.token
            )

            const appUser = await authAppUserUsecase.execute({ cpf, password })

            return res.json(appUser)

        } catch (err: any) {
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}