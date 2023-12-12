import { AppUserByUserEntity } from "../entities/create-user-by-user/appuser-by-user.entity"

export type AppUserAuthResponse = {
    id: string,
    cpf: string,
    email: string,
    app_user_data_id: string | null,
    AppUserData:{
        company_type_id: string,
        employee: boolean
    }
       
}

export type AppUserResponse = {
    id: string
    cpf: string
    email: string
    password: string
    app_user_data_id: string | null
    AppUserData:{
        company_type_id: string,
        employee: boolean
    }
    
}

export interface IAppUserAuthRepository{
    findByCPFAuth(cpf: string): Promise<AppUserByUserEntity | null>
    findByCPF(cpf: string): Promise<AppUserAuthResponse | null>
    findByemail(email: string): Promise<AppUserAuthResponse | null>
    findById(id: string): Promise<AppUserResponse| null>
    saveNewUser(data: AppUserByUserEntity): Promise<AppUserAuthResponse>
    saveRegisteredUser(data: AppUserByUserEntity): Promise<AppUserAuthResponse>
}