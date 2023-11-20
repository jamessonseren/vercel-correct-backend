import { prismaClient } from "../../../../infra/databases/prisma.config";
import { CorrectAdminEntity } from "../../entities/correct-admin.entity";
import { CorrectAdminMapper } from "../../mapper/CorrectAdminMapper";
import { ICorrectAdminRepository } from "../correct-admin.repository";

export class CorrectAdminPrismaRepository implements ICorrectAdminRepository{
    async findByUserName(userName: string): Promise<CorrectAdminEntity | null> {
        const admin = await prismaClient.correctAdmin.findUnique({
            where:{
                usuario: userName
            }
        })

        if(admin) return CorrectAdminMapper.prismaToEntity(admin)
        return null
    }
    async save(data: CorrectAdminEntity): Promise<CorrectAdminEntity> {
        const admin = await prismaClient.correctAdmin.create({
            data: {
                nome: data.name,
                email: data.email,
                usuario: data.userName,
                password: data.password
            }
        })
        
        return CorrectAdminMapper.prismaToEntity(admin)
    }

   async findById(id: string): Promise<CorrectAdminEntity | null> {
        const correctAdmin = await prismaClient.correctAdmin.findUnique({
            where:{
                id
            }
        })
        if(correctAdmin) return CorrectAdminMapper.prismaToEntity(correctAdmin)

        return null
    }

}