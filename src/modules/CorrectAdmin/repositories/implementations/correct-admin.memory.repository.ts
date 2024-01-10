import { CorrectAdminEntity } from "../../entities/correct-admin.entity";
import { ICorrectAdminRepository } from "../correct-admin.repository";
import { AdminResponse } from "../../correct-dto/correct.dto";

export class CorrectAdminMemoryRepository implements ICorrectAdminRepository{
    
    admin: CorrectAdminEntity[] = []

    async findByUserName(userName: string): Promise<CorrectAdminEntity | null> {
        return this.admin.find(admin => admin.userName === userName) || null
    }
    async save(data: CorrectAdminEntity): Promise<AdminResponse> {
        this.admin.push(data)

        return {
            id: data.id, 
            name: data.name, 
            email: data.email, 
            userName: data.userName, 
            permissions: data.permissions
        }
    }

    async findById(id: string): Promise<CorrectAdminEntity | null> {
       return this.admin.find(admin => admin.id === id) || null
    }

    async findAdmin(): Promise<any> {
        return this.admin || null
    }

    
}