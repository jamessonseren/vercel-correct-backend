import { AppUserValidationEntity } from "../../entities/app-user-validation/appuser-validation.entity";

export interface IAppUserValidationRepository{
    findByAuthId(id: string): Promise<AppUserValidationEntity | null>
    findById(id: string): Promise<AppUserValidationEntity | null>
}