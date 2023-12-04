import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { CompanyAdminEntity } from "../../entities/company-admin.entity";
import { ICompanyAdminRepository } from "../company-admin.repository";

export type CompanyAdminResponse = {
    id: string,
    fullName: string,
    status: boolean,
    email: string,
    cnpj: string,
    function: string
}
export class CompanyAdminPrismaRepository implements ICompanyAdminRepository{
   
    async findByCNPJAuth(cnpj: string): Promise<CompanyAdminEntity | null> {
        const companyAdmin = await prismaClient.companyAdmin.findUnique({
            where:{
                cnpj: cnpj
            }
        })

        return companyAdmin || null
    }

    async findByCNPJ(cnpj: string): Promise<CompanyAdminResponse | null> {
        const companyAdmin = await prismaClient.companyAdmin.findUnique({
            where:{
                cnpj: cnpj
            }
        })

        return companyAdmin || null
    }

    async findById(id: string): Promise<CompanyAdminEntity | null> {
        const companyAdmin = await prismaClient.companyAdmin.findUnique({
            where:{
                id
            }
        })

        return companyAdmin || null
    }

    async findByEmail(email: string): Promise<CompanyAdminEntity | null> {
        const companyAdmin = await prismaClient.companyAdmin.findUnique({
            where:{
                email
            }
        })

        return companyAdmin || null
    }
    async save(data: CompanyAdminEntity): Promise<CompanyAdminResponse> {
        const companyAdmin = await prismaClient.companyAdmin.create({
            data:{
                ...data
            },
            select:{
                id: true,
                fullName: true,
                email: true,
                status: true,
                cnpj: true,
                function: true
            }
        })

        return companyAdmin
    }

}