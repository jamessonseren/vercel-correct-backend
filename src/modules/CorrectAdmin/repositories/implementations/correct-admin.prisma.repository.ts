import { prismaClient } from "../../../../infra/databases/prisma.config";
<<<<<<< HEAD
import { CorrectAdminEntity } from "../../entities/correct-admin.entity";
import { ICorrectAdminRepository } from "../correct-admin.repository";

export type AdminResponse = {
    id: string
    name: string
    email: string
    userName: string
}
export class CorrectAdminPrismaRepository implements ICorrectAdminRepository {
=======
import { AdminResponse } from "../../correct-dto/correct.dto";
import { CorrectAdminEntity } from "../../entities/correct-admin.entity";
import { ICorrectAdminRepository } from "../correct-admin.repository";



export class CorrectAdminPrismaRepository implements ICorrectAdminRepository {

>>>>>>> correct-nodejs-backend/main
    async findByUserName(userName: string): Promise<CorrectAdminEntity | null> {
        const admin = await prismaClient.correctAdmin.findUnique({
            where: {
                userName: userName
            }
        })

<<<<<<< HEAD
       return admin
=======
        return admin
>>>>>>> correct-nodejs-backend/main
    }
    async save(data: CorrectAdminEntity): Promise<AdminResponse> {
        const admin = await prismaClient.correctAdmin.create({
            data: {
                name: data.name,
                email: data.email,
                userName: data.userName,
                password: data.password
            },
<<<<<<< HEAD
            select:{
                id: true,
                name: true,
                email: true,
                userName: true,            }
=======
            select: {
                id: true,
                name: true,
                email: true,
                userName: true,
                permissions: true
            }
>>>>>>> correct-nodejs-backend/main
        })

        return admin
    }

    async findById(id: string): Promise<AdminResponse | null> {
        const admin = await prismaClient.correctAdmin.findUnique({
            where: {
                id
            }
        })
<<<<<<< HEAD
       return admin
=======
        return admin
    }

    async findAdmin(): Promise<AdminResponse | null> {
        const admin = await prismaClient.correctAdmin.findFirst({
            where: {
                permissions: {
                    equals: ["admin"]
                }
            },
            select: {
                id: true,
                name: true,
                email: true,
                userName: true,
                permissions: true,

            }
        })
        return admin

>>>>>>> correct-nodejs-backend/main
    }

}