import { CorrectAdminEntity } from "../entities/correct-admin.entity";

export interface ICorrectAdminRepository{
    findByUserName(userName: string): Promise<CorrectAdminEntity | null>
    save(data: CorrectAdminEntity): Promise<CorrectAdminEntity>
    findById(id: string): Promise<CorrectAdminEntity | null>
}