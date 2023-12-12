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
            include:{
                AppUserData:{
                    select:{
                        company_type_id: true,
                        employee: true
                    }
                }
            }
        })

        if(appUser === null) return null
        console.log({appUser})
        return {
            ...appUser,
            AppUserData: appUser.AppUserData
                ? {
                    company_type_id: appUser.AppUserData.company_type_id,
                    employee: appUser.AppUserData.employee
                }
                : null
        } as AppUserResponse;
    }

    async findByemail(email: string): Promise<AppUserAuthResponse | null> {
        const appUser = await prismaClient.appUserAuth.findUnique({
            where:{
                email
            },
            include:{
                AppUserData:{
                    select:{
                        company_type_id: true,
                        employee: true
                    }
                }
            }
        })
        if(appUser === null) return null

        return {
            ...appUser,
            AppUserData: appUser.AppUserData
                ? {
                    company_type_id: appUser.AppUserData.company_type_id,
                    employee: appUser.AppUserData.employee
                }
                : null
        } as AppUserResponse;
    }

    async findById(id: string): Promise<AppUserResponse | null> {
        const appUser = await prismaClient.appUserAuth.findUnique({
            where:{
                id
            },
            include:{
                AppUserData:{
                    select:{
                        company_type_id: true,
                        employee: true
                    }
                }
            }
        })
        
        if(appUser === null) return null

        return {
            ...appUser,
            AppUserData: appUser.AppUserData
                ? {
                    company_type_id: appUser.AppUserData.company_type_id,
                    employee: appUser.AppUserData.employee
                }
                : null
        } as AppUserResponse;
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
                app_user_data_id: true,
                AppUserData:{
                    select:{
                        company_type_id: true,
                        employee: true
                    }
                }
                
            }
        })

        return {
            ...appUser,
            AppUserData: appUser.AppUserData
                ? {
                    company_type_id: appUser.AppUserData.company_type_id,
                    employee: appUser.AppUserData.employee
                }
                : null
        } as AppUserResponse;
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
                app_user_data_id: true,
                AppUserData:{
                    select:{
                        company_type_id: true,
                        employee: true
                    }
                }
            }
        })

       
        return {
            ...appUser,
            AppUserData: appUser.AppUserData
                ? {
                    company_type_id: appUser.AppUserData.company_type_id,
                    employee: appUser.AppUserData.employee
                }
                : null
        } as AppUserResponse;
    }

}