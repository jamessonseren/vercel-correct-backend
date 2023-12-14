import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { CompanySecondaryUserEntity } from "../../entities/company-secondary-user.entity";
import { CompanySecondaryUserResponse, ICompanySecondaryUserRepository } from "../company-secondary-user.repository";


export class CompanySecondaryUserPrismaRepository implements ICompanySecondaryUserRepository{
    async findByUsernameAuth(user_name: string): Promise<CompanySecondaryUserEntity | null> {
        const user = await prismaClient.companySecondaryUser.findUnique({
            where:{
                user_name: user_name
            }
        })

        return user
    }
    async findById(id: string): Promise<CompanySecondaryUserResponse | null> {
        const user = await prismaClient.companySecondaryUser.findUnique({
            where:{
                id
            }, 
            select:{
                id: true,
                cnpj: true,
                company_admin_id: true,
                user_name: true
            }
        })

        return user
    }
    async findByCnpjAndUsername(cnpj: string, user_name: string): Promise<CompanySecondaryUserResponse | null> {
        const user = await prismaClient.companySecondaryUser.findFirst({
            where:{
                cnpj,
                user_name
            }, 
            select:{
                id: true,
                cnpj: true,
                company_admin_id: true,
                user_name: true
            }
        })

        return user
    }
    async saveOrUpdate(data: CompanySecondaryUserEntity): Promise<CompanySecondaryUserResponse> {
        const user = await prismaClient.companySecondaryUser.upsert({
            where:{
                user_name: data.user_name,
                cnpj: data.cnpj
            },
            create:{
                password: data.password,
                user_type: data.user_type,
                cnpj: data.cnpj,
                user_name: data.user_name,
                company_admin_id: data.company_admin_id
            },
            update:{
                password: data.password
            },
            select:{
                id: true,
                cnpj: true,
                company_admin_id: true,
                user_name: true
            }
        })

        return user
    }
    
}