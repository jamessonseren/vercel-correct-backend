import { CompanyAdminEntity } from "../../../../../modules/Company/CompanyAdmin/entities/company-admin.entity"

export type TokenCompanyAdmin = {
    sub: string
}
export interface ICompanyAdminToken{
    create(admin: CompanyAdminEntity): string
    validate(token: string): TokenCompanyAdmin | null
}