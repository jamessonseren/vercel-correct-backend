import { CorrectAdminEntity } from "../../entities/correct-admin.entity";
import { ICorrectAdminRepository } from "../correct-admin.repository";
<<<<<<< HEAD

export class CorrectAdminMemoryRepository implements ICorrectAdminRepository{

=======
import { AdminResponse } from "../../correct-dto/correct.dto";

export class CorrectAdminMemoryRepository implements ICorrectAdminRepository{
    
>>>>>>> correct-nodejs-backend/main
    admin: CorrectAdminEntity[] = []

    async findByUserName(userName: string): Promise<CorrectAdminEntity | null> {
        return this.admin.find(admin => admin.userName === userName) || null
    }
<<<<<<< HEAD
    async save(data: CorrectAdminEntity): Promise<CorrectAdminEntity> {
        this.admin.push(data)
        return data
=======
    async save(data: CorrectAdminEntity): Promise<AdminResponse> {
        this.admin.push(data)

        return {
            id: data.id, 
            name: data.name, 
            email: data.email, 
            userName: data.userName, 
            permissions: data.permissions
        }
>>>>>>> correct-nodejs-backend/main
    }

    async findById(id: string): Promise<CorrectAdminEntity | null> {
       return this.admin.find(admin => admin.id === id) || null
    }
<<<<<<< HEAD
=======

    async findAdmin(): Promise<any> {
        return this.admin || null
    }

>>>>>>> correct-nodejs-backend/main
    
}