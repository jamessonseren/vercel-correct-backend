import { CorrectAdminEntity } from "../entities/correct-admin.entity";
import { CorrectAdmin } from "@prisma/client";

export class CorrectAdminMapper{
    static prismaToEntity = (data: CorrectAdmin): CorrectAdminEntity => {
        return{
            ...data,
            name: data.nome,
            userName: data.usuario,
            
        }
    } 

    static entityToPrisma = (data: CorrectAdminEntity): CorrectAdmin => {
        return{
            ...data,
            nome: data.name,
            usuario: data.userName
        }
    }
}