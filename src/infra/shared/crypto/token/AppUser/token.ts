import { AppUserByUserEntity } from "../../../../../modules/AppUser/AppUserManagement/entities/create-user-by-user/appuser-by-user.entity"

export type TokenAppUser = {
    sub: string
}
export interface IAppUserToken{
    create(appUser: AppUserByUserEntity): string
    validate(token: string): TokenAppUser | null
}