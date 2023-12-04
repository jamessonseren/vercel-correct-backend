import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { CompanyTypeEntity } from "../../entities/company-type.entity";
import { ICompanyTypeRepository } from "../company-type.repository";

export class CompanyTypePrismaRepository implements ICompanyTypeRepository{
   
    async findByCompanyAdminId(companyAdminId: string): Promise<CompanyTypeEntity | null> {
        return await prismaClient.companyType.findFirst({
            where:{
                company_admin_id: companyAdminId
            }
        })

    }

    async saveOrUpdate(data: CompanyTypeEntity): Promise<CompanyTypeEntity> {
        const companyType = await prismaClient.companyType.upsert({
            where:{
                cnpj: data.cnpj
            },
            create:{
                cnpj: data.cnpj,
                type: data.type,
                company_admin_id: data.company_admin_id
            },
            update:{
                type: data.type,
            }
        })

        return companyType
    }

    async findById(id: string): Promise<CompanyTypeEntity | null> {
        return await prismaClient.companyType.findUnique({
            where:{
                id
            }
        })
    }
}