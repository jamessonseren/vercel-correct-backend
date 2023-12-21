import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { AppUserByUserEntity } from "../../entities/create-user-by-user/appuser-by-user.entity";
import { AppUserResponse, IAppUserAuthRepository } from "../app-use-auth-repository";
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
            },
            select:{
                id: true,
                cpf: true,
                email: true
                
            }
        })

        if(appUser === null) return null
        
        return appUser
}

    async findByemail(email: string): Promise<AppUserAuthResponse | null> {
        const appUser = await prismaClient.appUserAuth.findUnique({
            where:{
                email
            },
            select:{
                id: true,
                cpf: true,
                email: true
                
            }
        })

        if(appUser === null) return null
        
        return appUser
}

    async findById(id: string): Promise<AppUserResponse | null> {
        const appUser = await prismaClient.appUserAuth.findUnique({
            where:{
                id
            },
            select:{
                id: true,
                cpf: true,
                email: true
                
            }
        })

        if(appUser === null) return null
        
        return appUser as AppUserResponse
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
                email: true
                
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
            },
            select:{
                id: true,
                cpf: true,
                email: true
                
            }
        })
        
        return appUser
    }

}