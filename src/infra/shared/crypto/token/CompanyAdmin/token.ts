import { CompanyUserEntity } from "../../../../../modules/Company/CompanyUser/entities/company-user.entity"

export type TokenCompanyAdmin = {
    sub: string
}
<<<<<<< HEAD
export interface ICompanyAdminToken{
    create(admin: CompanyUserEntity): string
    validate(token: string): TokenCompanyAdmin | null
=======


export interface ICompanyAdminToken{
    create(admin: CompanyUserEntity): string
    validate(token: string):TokenCompanyAdmin | null
>>>>>>> correct-nodejs-backend/main
}