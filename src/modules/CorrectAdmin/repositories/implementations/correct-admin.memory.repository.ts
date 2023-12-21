import { CorrectAdminEntity } from "../../entities/correct-admin.entity";
import { ICorrectAdminRepository } from "../correct-admin.repository";

export class CorrectAdminMemoryRepository implements ICorrectAdminRepository{

    admin: CorrectAdminEntity[] = []

    async findByUserName(userName: string): Promise<CorrectAdminEntity | null> {
        return this.admin.find(admin => admin.userName === userName) || null
    }
    async save(data: CorrectAdminEntity): Promise<CorrectAdminEntity> {
        this.admin.push(data)
        return data
    }

    async findById(id: string): Promise<CorrectAdminEntity | null> {
       return this.admin.find(admin => admin.id === id) || null
    }
    
}