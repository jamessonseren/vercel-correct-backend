import { AppUserProps, AppUserbyCorrectEntity } from "../../entities/app-user-by-correct.entity";
import { IAppUserRepository } from "../app-user-repostory";

export class AppUserMemoryRepository implements IAppUserRepository {

    items: AppUserbyCorrectEntity[] = []

    async findById(id: string): Promise<AppUserbyCorrectEntity | null> {
        return this.items.find(app_user => app_user.id === id) || null
    }
    async findByCPF(cpf: string): Promise<AppUserbyCorrectEntity | null> {
        return this.items.find(app_user => app_user.cpf === cpf) || null
    }
    async save(data: AppUserbyCorrectEntity): Promise<AppUserbyCorrectEntity> {
        this.items.push(data)
        return data
    }

}