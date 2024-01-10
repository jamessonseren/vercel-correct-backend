import { CorrectAdminEntity } from "../entities/correct-admin.entity";
import { AdminResponse } from "../correct-dto/correct.dto";

export interface ICorrectAdminRepository{
    findByUserName(userName: string): Promise<CorrectAdminEntity | null>
    save(data: CorrectAdminEntity): Promise<AdminResponse>
    findAdmin(): Promise<AdminResponse | null>
    findById(id: string): Promise<AdminResponse | null>
}