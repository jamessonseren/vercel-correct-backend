import { CorrectAdminEntity } from "../entities/correct-admin.entity";
import { AdminResponse } from "./implementations/correct-admin.prisma.repository";

export interface ICorrectAdminRepository{
    findByUserName(userName: string): Promise<CorrectAdminEntity | null>
    save(data: CorrectAdminEntity): Promise<AdminResponse>
    findById(id: string): Promise<AdminResponse | null>
}