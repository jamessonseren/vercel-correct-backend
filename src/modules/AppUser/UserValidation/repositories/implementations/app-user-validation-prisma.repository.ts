import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { AppUserValidationEntity } from "../../entities/appuser-validation.entity";
import { IAppUserValidationRepository } from "../app-user-validation-repository";

export class AppUservalidationPrismaRepository implements IAppUserValidationRepository{
    async findByAuthId(id: string): Promise<AppUserValidationEntity | null> {
        const userValidation = await prismaClient.appUserValidationDocument.findFirst({
            where:{
                app_user_auth_id: id
            }
        })

        return userValidation
    }
    async findById(id: string): Promise<AppUserValidationEntity | null> {
        const userValidation = await prismaClient.appUserValidationDocument.findFirst({
            where:{
                id
            }
        })

        return userValidation
    }
    
}