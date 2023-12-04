import { prismaClient } from "../../../../../../infra/databases/prisma.config";
import { CompanyDataEntity } from "../../../../CompanyData/entities/company-data.entity";
import { ICompanyDataRepository } from "../../../../CompanyData/repositories/company-data.repository";


export class CompanyDataPrismaRepository implements ICompanyDataRepository{
    
    async saveOrUpdate(data: CompanyDataEntity): Promise<CompanyDataEntity> {
        const companyData = await prismaClient.companyData.upsert({
            where:{
                cnpj: data.cnpj
            },
            create:{
                corporate_name: data.corporate_name,
                cnpj: data.cnpj,
                cnae_id: data.cnae_id,
                classification: data.classification,
                total_employees: data.total_employees,
                phone_1: data.phone_1,
                phone_2: data.phone_2,
                company_admin_id: data.company_admin_id,
                correct_admin_id: data.correct_admin_id
            },
            update:{
                corporate_name: data.corporate_name,
                cnae_id: data.cnae_id,
                classification: data.classification,
                total_employees: data.total_employees,
                phone_1: data.phone_1,
                phone_2: data.phone_2,
            }
        })

        return companyData
    }
    async findByCNPJ(cnpj: string): Promise<CompanyDataEntity | null> {
        const companyData = await prismaClient.companyData.findUnique({
            where:{
                cnpj
            }
        })

        return companyData
    }

    async findByCompanyAdmin(id: string): Promise<CompanyDataEntity | null> {
        const companyData = await prismaClient.companyData.findFirst({
            where:{
                company_admin_id: id
            }
        })

        return companyData
    }

}