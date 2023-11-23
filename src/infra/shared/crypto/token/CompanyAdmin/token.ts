import { CompanyAdminEntity } from "../../../../../modules/Company/entities/company-admin/company-admin.entity"

export type TokenAdmin = {
    sub: string
}
export interface ICompanyAdminToken{
    create(admin: CompanyAdminEntity): string
    validate(token: string): TokenAdmin | null
}