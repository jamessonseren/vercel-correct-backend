import { AppUserDataEntity } from "../../entities/appuser-data.entity";
import { IAppUserRepository } from "../app-user-data-repostory";

export class AppUserMemoryRepository implements IAppUserRepository {
    

    items: AppUserDataEntity[] = []

    async findById(id: string): Promise<AppUserDataEntity | null> {
        return this.items.find(app_user => app_user.id === id) || null
    }
    async findByCPF(cpf: string): Promise<AppUserDataEntity | null> {
        return this.items.find(app_user => app_user.cpf === cpf) || null
    }
    findByCPFEmployee(cpf: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async save(data: AppUserDataEntity): Promise<AppUserDataEntity> {
        this.items.push(data)
        return data
    }

}