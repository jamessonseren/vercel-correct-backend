import { CompanyUserEntity } from "../../../../../modules/Company/CompanyUser/entities/company-user.entity"

export type TokenCompanyAdmin = {
    sub: string
}


export interface ICompanyAdminToken{
    create(admin: CompanyUserEntity): string
    validate(token: string):TokenCompanyAdmin | null
}