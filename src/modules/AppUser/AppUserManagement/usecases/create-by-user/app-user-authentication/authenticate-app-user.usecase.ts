import { IPasswordCrypto } from "../../../../../../crypto/password.crypto"
import { CustomError } from "../../../../../../errors/custom.error"
import { IAppUserToken } from "../../../../../../infra/shared/crypto/token/AppUser/token"
import { IAppUserAuthRepository } from "../../../repositories/app-use-auth-repository"

export type AuthenticateAppuserRequest = {
    cpf: string
    password: string
}

export class AuthenticateAppuserUsecase{
    constructor(
        private appUserRepository: IAppUserAuthRepository,
        private passwordCrypto: IPasswordCrypto,
        private token: IAppUserToken

    ){}

    async execute({ cpf, password}: AuthenticateAppuserRequest){
        if(!cpf || !password) throw new CustomError("Username/password is incorrect", 401)

        const appUser = await this.appUserRepository.findByCPFAuth(cpf)
        if(!appUser) throw new CustomError("Username/password is incorrect", 401)

        const comparePasswordHash = await this.passwordCrypto.compare(password, appUser.password)
        if(!comparePasswordHash) throw new CustomError("Username/password is incorrect", 401)

        const tokenGenerated = await this.token.create(appUser)

        return tokenGenerated
    }
}