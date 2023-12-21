import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { CompanyUserEntity } from "../../entities/company-user.entity";
import { ICompanyUserRepository } from "../company-user.repository";
import { CompanyUserResponse } from "../../companyUserDto/company-user.dto";


export class CompanyUserPrismaRepository implements ICompanyUserRepository{
    
   
    async findByCNPJAuth(cnpj: string): Promise<CompanyUserEntity | null> {
        const companyUser = await prismaClient.companyUser.findUnique({
            where:{
                cnpj: cnpj
            }
        })

        return companyUser || null
    }

    async findByCNPJ(cnpj: string): Promise<CompanyUserResponse | null> {
        const companyUser = await prismaClient.companyUser.findUnique({
            where:{
                cnpj: cnpj
            },
            select:{
                id: true,
                fullName: true,
                user_name: true,
                permissions: true,
                client_admin: true,
                email: true,
                cnpj: true,
                function: true
            }
        })

        return companyUser || null
    }

    async findById(id: string): Promise<CompanyUserResponse| null> {
        const companyUser = await prismaClient.companyUser.findUnique({
            where:{
                id
            },
            select:{
                id: true,
                fullName: true,
                user_name: true,
                permissions: true,
                client_admin: true,
                email: true,
                cnpj: true,
                function: true
            }
        })

        return companyUser || null
    }

    async findByEmail(email: string): Promise<CompanyUserResponse| null> {
        const companyUser = await prismaClient.companyUser.findUnique({
            where:{
                email
            }
        })

        return companyUser || null
    }

    async findByUserName(user_name: string): Promise<CompanyUserResponse | null> {
        const companyUser = await prismaClient.companyUser.findUnique({
            where:{
                user_name
            }
        })

        return companyUser
    }
    async save(data: CompanyUserEntity): Promise<CompanyUserResponse> {
        const companyUser = await prismaClient.companyUser.create({
            data:{
                cnpj: data.cnpj,
                email: data.email,
                fullName: data.fullName,
                function: data.function,
                password: data.password,
                user_name: data.user_name
            },
            select:{
                id: true,
                fullName: true,
                user_name: true,
                permissions: true,
                client_admin: true,
                email: true,
                cnpj: true,
                function: true
            }
        })

        return companyUser
    }

}