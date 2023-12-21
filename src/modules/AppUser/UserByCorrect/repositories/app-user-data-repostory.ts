import { AppUserProps, AppUserDataEntity } from "../entities/appuser-data.entity"

export interface IAppUserRepository{
    findById(id: string):Promise<AppUserDataEntity | null>
    findByCPF(cpf: string): Promise<AppUserDataEntity | null>
    findByCPFEmployee(cpf: string): Promise<AppUserDataEntity | null>
    save(data: AppUserProps): Promise<AppUserProps>
    saveOrUpdateByAppUser(data: AppUserProps): Promise<AppUserProps>
}