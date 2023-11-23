import { CorrectAdminEntity } from "../../../../../modules/CorrectAdmin/entities/correct-admin.entity"

export type TokenAdmin = {
    sub: string
}

export interface IToken{
    create(admin: CorrectAdminEntity):string
    validate(token: string): TokenAdmin | null
}