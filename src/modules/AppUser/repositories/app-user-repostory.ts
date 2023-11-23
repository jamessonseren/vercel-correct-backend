import { AppUserProps } from "../entities/app-user-by-correct.entity";

export interface IAppUserRepository{
    findById(id: string):Promise<AppUserProps | null>
    findByCPF(cpf: string): Promise<AppUserProps | null>
    save(data: AppUserProps): Promise<AppUserProps>
}