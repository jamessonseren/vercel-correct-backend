import { AppUserProps, AppUserbyCorrectEntity } from "../../entities/app-user-by-correct.entity";

export interface IAppUserRepository{
    findById(id: string):Promise<AppUserbyCorrectEntity | null>
    findByCPF(cpf: string): Promise<AppUserbyCorrectEntity | null>
    save(data: AppUserProps): Promise<AppUserProps>
}