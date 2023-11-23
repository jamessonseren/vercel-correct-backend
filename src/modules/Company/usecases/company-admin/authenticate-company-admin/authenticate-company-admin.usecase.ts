import { CustomError } from "../../../../../errors/custom.error"
import { IPasswordCrypto } from "../../../../../infra/shared/crypto/password.crypto"
import { ICompanyAdminToken } from "../../../../../infra/shared/crypto/token/CompanyAdmin/token"
import { ICompanyAdminRepository } from "../../../repositories/company-admin/company-admin.repository"

export type AuthenticateCompanyAdminRequest = {
    cnpj: string,
    password: string,
}
export class AuthenticateCompanyAdminUsecase{
    constructor(
        private companyAdminRepository: ICompanyAdminRepository,
        private passwordCrypto: IPasswordCrypto,
        private token: ICompanyAdminToken
    ){}
    
    async execute({ cnpj, password}: AuthenticateCompanyAdminRequest ){
        if(!cnpj || !password) throw new CustomError("Incorrect CNPJ/password", 401)

        const findAdmin = await this.companyAdminRepository.findByCNPJAuth(cnpj)
        if(!findAdmin) throw new CustomError("Incorrect CNPJ/password", 401)

        const comparePasswordHash = await this.passwordCrypto.compare(password, findAdmin.password )
        if(!comparePasswordHash) throw new CustomError("Incorrect CNPJ/password", 401)

        const tokenGenerated = await this.token.create(findAdmin)

        return tokenGenerated
    
    }
}