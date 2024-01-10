import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { CompanyUserEntity, CompanyUserProps } from "../../entities/company-user.entity";
import { ICompanyUserRepository } from "../company-user.repository";
import { CompanyUserResponse } from "../../companyUserDto/company-user.dto";
import { $Enums, UserRoles } from "@prisma/client";


export class CompanyUserPrismaRepository implements ICompanyUserRepository {
   




    async findById(id: string): Promise<CompanyUserResponse | null> {
        const companyUser = await prismaClient.companyUser.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                fullName: true,
                user_name: true,
                roles: true,
                permissions: true,
                user_code: true,
                client_admin: true,
                email: true,
                cnpj: true,
                cpf: true,
                function: true
            }
        })

        return companyUser || null
    }

    async findByCnpjAndAdminRole(cnpj: string): Promise<CompanyUserResponse | null> {
        const admin = await prismaClient.companyUser.findFirst({
            where: {
                cnpj,
                roles: {
                    has: 'admin'
                }
            }
        })

        return admin
    }

    async findByEmail(email: string): Promise<CompanyUserResponse | null> {
        const companyUser = await prismaClient.companyUser.findUnique({
            where: {
                email
            }
        })

        return companyUser || null
    }

    async findByUserNameAndCNPJAuth(user_name: string, cnpj: string): Promise<CompanyUserEntity | null> {
        const companyUser = await prismaClient.companyUser.findUnique({
            where: {
                user_name,
                cnpj

            }
        })

        return companyUser
    }
    async findByUserCode(user_code: string): Promise<CompanyUserResponse[] | null> {
        const user = await prismaClient.companyUser.findMany({
            where: {
                user_code,
                roles: {
                    has: 'user'
                }

            },
            select: {
                id: true,
                fullName: true,
                user_name: true,
                roles: true,
                permissions: true,
                user_code: true,
                client_admin: true,
                email: true,
                cnpj: true,
                cpf: true,
                function: true
            }
        })

        return user
    }

    async updateUser(data: CompanyUserEntity): Promise<CompanyUserResponse> {
        const updateUser = await prismaClient.companyUser.update({
            where: {
                cnpj: data.cnpj,
                user_name: data.user_name
            },
            data: {
                permissions: data.permissions,
                password: data.password

            }
        })

        return updateUser
    }

    async saveUser(data: CompanyUserEntity): Promise<CompanyUserResponse> {
        const companyUser = await prismaClient.companyUser.create({
            data: {
                cnpj: data.cnpj,
                cpf: data.cpf,
                email: data.email,
                fullName: data.fullName,
                client_admin: data.client_admin,
                roles: data.roles,
                user_code: data.user_code,
                permissions: data.permissions,
                function: data.function,
                password: data.password,
                user_name: data.user_name
            },
            select: {
                id: true,
                fullName: true,
                user_name: true,
                roles: true,
                permissions: true,
                user_code: true,
                client_admin: true,
                email: true,
                cnpj: true,
                cpf: true,
                function: true
            }
        })

        return companyUser
    }


    async saveOrUpdate(data: CompanyUserEntity): Promise<CompanyUserEntity> {
        const companyUser = await prismaClient.companyUser.upsert({
            where: {
                user_name: data.user_name,
            },
            create: {
                cpf: data.cpf,
                cnpj: data.cnpj,
                email: data.email,
                fullName: data.fullName,
                user_code: data.user_code,
                permissions: data.permissions,
                roles: data.roles,
                function: data.function,
                password: data.password,
                user_name: data.user_name
            },
            update: {
                cpf: data.cpf,
                email: data.email,
                fullName: data.fullName,
                permissions: data.permissions,
                roles: data.roles,
                function: data.function,
                password: data.password,
                user_name: data.user_name
            }
        })

        return companyUser
    }

    async deleteByAdminById(user_id: string): Promise<void> {
        await prismaClient.companyUser.delete({
            where:{
                id: user_id
            }
        })
    }


}