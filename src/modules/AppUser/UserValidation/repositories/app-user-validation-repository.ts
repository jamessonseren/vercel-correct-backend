import { AppUserValidationEntity } from "../entities/appuser-validation.entity";

export interface IAppUserValidationRepository{
    findByAuthId(id: string): Promise<AppUserValidationEntity | null>
    findById(id: string): Promise<AppUserValidationEntity | null>
}