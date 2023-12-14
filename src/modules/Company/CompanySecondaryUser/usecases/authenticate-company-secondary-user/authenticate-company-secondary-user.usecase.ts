import { UserType } from "@prisma/client"
import { CustomError } from "../../../../../errors/custom.error"
import { ICompanySecondaryUserRepository } from "../../repositories/company-secondary-user.repository"
import { IPasswordCrypto } from "../../../../../crypto/password.crypto"
import { IcompanyUserToken } from "../../../../../infra/shared/crypto/token/CompanySecondaryUser/token"

export type AuthenticateCompanyUserRequest = {
    user_type: UserType,
    user_name: string,
    password: string
}

export class AuthenticateCompanySecondaryUserUsecase{
    constructor(
        private companySecondaryUserRepository: ICompanySecondaryUserRepository,
        private passwordCrypto: IPasswordCrypto,
        private token: IcompanyUserToken
    ){}

    async execute(data: AuthenticateCompanyUserRequest){

        if(!data.user_type) throw new CustomError("User type is required", 401)

        if(!data.user_name || !data.password) throw new CustomError("Incorrect username/password", 401)

        //get user details with password returned
        const findUser = await this.companySecondaryUserRepository.findByUsernameAuth(data.user_name)
        if(!findUser) throw new CustomError("Incorrect username/password", 401)

        //compare hashed password
        const comparePassword = await this.passwordCrypto.compare(data.password, findUser.password)
        if(!comparePassword) throw new CustomError("Incorrect username/password", 401)

        //create token if everything is okay
        const tokenGenerated = await this.token.create(findUser)

        return tokenGenerated


    }
}