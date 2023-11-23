import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { AppUserByUserEntity } from "../../../entities/appuser-by-user.entity";
import { IAppUserAuthRepository } from "../app-use-auth-repository";
import { AppUserAuthResponse } from "../app-use-auth-repository";

export class AppUserAuthPrismaRepository implements IAppUserAuthRepository{
    
    
    async findByCPFAuth(cpf: string): Promise<AppUserByUserEntity | null> {
        const appUser = await prismaClient.appUserAuth.findUnique({
            where:{
                cpf
            }
        })

        return appUser
    }

    async findByCPF(cpf: string): Promise<AppUserAuthResponse | null> {
        const appUser = await prismaClient.appUserAuth.findUnique({
            where:{
                cpf
            }
        })

        return appUser
    }

    async findByemail(email: string): Promise<AppUserAuthResponse | null> {
        const appUser = await prismaClient.appUserAuth.findUnique({
            where:{
                email
            }
        })

        return appUser
    }

    async findById(id: string): Promise<AppUserByUserEntity | null> {
        const appUser = await prismaClient.appUserAuth.findUnique({
            where:{
                id
            }
        })

        return appUser
    }
    async saveNewUser(data: AppUserByUserEntity): Promise<AppUserAuthResponse> {
        const appUser = await prismaClient.appUserAuth.create({
            data:{
                cpf: data.cpf,
                email: data.email,
                password: data.password,
                
            },
            select:{
                id: true,
                cpf: true,
                email: true,
                app_user_data_id: true
            }
        })

        return appUser
    }

    async saveRegisteredUser(data: AppUserByUserEntity): Promise<AppUserAuthResponse> {
        const appUser = await prismaClient.appUserAuth.create({
            data:{
                cpf: data.cpf,
                email: data.email,
                password: data.password,
                app_user_data_id: data.app_user_data_id
            },
            select:{
                id: true,
                cpf: true,
                email: true,
                app_user_data_id: true
            }
        })

        return appUser
    }

}