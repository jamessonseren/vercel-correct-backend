import { CompanySecondaryUserEntity } from "../../../../../modules/Company/CompanySecondaryUser/entities/company-secondary-user.entity"
import { CorrectAdminEntity } from "../../../../../modules/CorrectAdmin/entities/correct-admin.entity"

export type TokenCompanyUser = {
    sub: string
}

export interface IcompanyUserToken{
    create(admin: CompanySecondaryUserEntity):string
    validate(token: string): TokenCompanyUser | null
}