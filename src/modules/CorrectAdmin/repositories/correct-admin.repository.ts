import { CorrectAdminEntity } from "../entities/correct-admin.entity";
<<<<<<< HEAD
import { AdminResponse } from "./implementations/correct-admin.prisma.repository";
=======
import { AdminResponse } from "../correct-dto/correct.dto";
>>>>>>> correct-nodejs-backend/main

export interface ICorrectAdminRepository{
    findByUserName(userName: string): Promise<CorrectAdminEntity | null>
    save(data: CorrectAdminEntity): Promise<AdminResponse>
<<<<<<< HEAD
=======
    findAdmin(): Promise<AdminResponse | null>
>>>>>>> correct-nodejs-backend/main
    findById(id: string): Promise<AdminResponse | null>
}