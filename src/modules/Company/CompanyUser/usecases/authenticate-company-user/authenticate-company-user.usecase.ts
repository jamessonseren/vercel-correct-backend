import { CustomError } from "../../../../../errors/custom.error"
import { IPasswordCrypto } from "../../../../../infra/shared/crypto/password.crypto"
import { ICompanyAdminToken } from "../../../../../infra/shared/crypto/token/CompanyAdmin/token"
import { ICompanyUserRepository } from "../../repositories/company-user.repository"

export type AuthenticateCompanyUserRequest = {
<<<<<<< HEAD
=======
   
>>>>>>> correct-nodejs-backend/main
    cnpj: string,
    user_name: string,
    password: string,
}
export class AuthenticateCompanyUserUsecase{
    constructor(
        private companyUserRepository: ICompanyUserRepository,
        private passwordCrypto: IPasswordCrypto,
        private token: ICompanyAdminToken
    ){}
    
    async execute({ cnpj, user_name, password}: AuthenticateCompanyUserRequest ){

<<<<<<< HEAD
        if(!cnpj || !password || !user_name) throw new CustomError("Incorrect CNPJ, username or password", 401)

        const findAdmin = await this.companyUserRepository.findByCNPJAuth(cnpj)
        if(!findAdmin) throw new CustomError("Incorrect CNPJ, username or password", 401)
=======
        if(!cnpj || !password || !user_name) throw new CustomError("Incorrect username/password", 401)

        const findAdmin = await this.companyUserRepository.findByUserNameAndCNPJAuth(user_name, cnpj)
        if(!findAdmin) throw new CustomError("Incorrect username/password", 401)
>>>>>>> correct-nodejs-backend/main

        const comparePasswordHash = await this.passwordCrypto.compare(password, findAdmin.password )
        if(!comparePasswordHash) throw new CustomError("Incorrect CNPJ, username or password", 401)

        const tokenGenerated = await this.token.create(findAdmin)

        return tokenGenerated
    
    }
}