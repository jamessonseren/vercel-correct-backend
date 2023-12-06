import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { AppUserAccountsEntity } from "../../entities/appUserAccounts.entity";
import { AppUserAccountsResponse, IAppUserAccountRepository } from "../app-user-account.repository";

export class AppUserAccountPrismaRepository implements IAppUserAccountRepository{
    async findById(id: string): Promise<AppUserAccountsEntity | null> {
        const userAccount = await prismaClient.appUserAccounts.findUnique({
            where:{
                id
            },
            include:{
                AppUserAuth: true,
                EmployerCards: true
            }
        })

        return userAccount
    }
    async findByAccountNumber(id: string): Promise<AppUserAccountsEntity | null> {
        const userAccount = await prismaClient.appUserAccounts.findUnique({
            where:{
                id
            },
            include:{
                AppUserAuth: true,
                EmployerCards: true
            }
        })

        return userAccount
    }
    async findByEmployerCardsId(id: string): Promise<AppUserAccountsResponse| null> {
        const userAccount = await prismaClient.appUserAccounts.findFirst({
            where:{
                employer_cards_id: id
            },
            include:{
                AppUserAuth: true,
                EmployerCards: {
                    include:{
                        Cards: true
                    }
                }
            }
        })

        return userAccount
    }
    async findByAppUserId(id: string): Promise<AppUserAccountsResponse | null> {
        const userAccount = await prismaClient.appUserAccounts.findUnique({
            where:{
                id
            },
            include:{
                AppUserAuth: true,
                EmployerCards: {
                    include:{
                        Cards: true
                    }
                }
            }
        })

        return userAccount
    }
    async save(data: AppUserAccountsEntity): Promise<AppUserAccountsResponse> {
        const userAccount = await prismaClient.appUserAccounts.create({
            data:{
                available_amount: data.available_amount,
                employer_cards_id: data.employer_cards_id,
                app_user_id: data.app_user_id
            },
            include:{
                AppUserAuth: true,
                EmployerCards: {
                    include:{
                        Cards: true
                    }
                }
            }
        })

        return userAccount
    }

}