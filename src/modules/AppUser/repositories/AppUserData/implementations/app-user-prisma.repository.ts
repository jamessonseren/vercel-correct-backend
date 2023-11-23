import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { AppUserProps, AppUserbyCorrectEntity } from "../../../entities/app-user-by-correct.entity";
import { IAppUserRepository } from "../app-user-data-repostory";

export class AppUserPrismaRepository implements IAppUserRepository{
   
    async findById(id: string): Promise<AppUserbyCorrectEntity | null> {
        const appUser = await prismaClient.appUserData.findUnique({
            where:{
                id
            }
        })

        return appUser || null
    }

    async findByCPF(cpf: string): Promise<AppUserbyCorrectEntity | null> {
        const appUser = await prismaClient.appUserData.findUnique({
            where:{
                cpf
            }
        })

        return appUser || null
    }

    async save(data: AppUserProps): Promise<AppUserProps> {
        return await prismaClient.appUserData.create({
            data:{
                cpf: data.cpf,
                date_of_birth: data.date_of_birth,
                full_name: data.full_name,
                gender: data.gender,
                marital_status: data.marital_status,
                company_type_id: data.company_type_id,
                correct_admin_id: data.correct_admin_id,
                internal_company_code: data.internal_company_code
            }
        })

    }

}