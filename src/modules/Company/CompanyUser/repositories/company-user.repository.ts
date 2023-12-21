import { CompanyUserEntity } from "../entities/company-user.entity"
import { CompanyUserResponse } from "../companyUserDto/company-user.dto"

export interface ICompanyUserRepository{
    findByCNPJAuth(cnpj: string): Promise<CompanyUserEntity | null>
    findByCNPJ(cnpj: string): Promise<CompanyUserResponse | null>
    findById(id: string): Promise<CompanyUserResponse | null>
    findByEmail(email: string): Promise<CompanyUserResponse | null>
    findByUserName(user_name: string): Promise<CompanyUserResponse | null>
    save(data: CompanyUserEntity): Promise<CompanyUserResponse>
}