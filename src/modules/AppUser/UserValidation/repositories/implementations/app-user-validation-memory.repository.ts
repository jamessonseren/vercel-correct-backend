import { AppUserValidationEntity } from "../../entities/appuser-validation.entity";
import { IAppUserValidationRepository } from "../app-user-validation-repository";

export class AppUserValidationMemoryRepository implements IAppUserValidationRepository {

    items: AppUserValidationEntity[] = []

    async findByAuthId(id: string): Promise<AppUserValidationEntity | null> {
        return this.items.find(app_user => app_user.app_user_auth_id === id) || null

    }
    async findById(id: string): Promise<AppUserValidationEntity | null> {
        return this.items.find(app_user => app_user.id === id) || null
    }

}