import { prismaClient } from "../../../../../../infra/databases/prisma.config";
import { CompanyDataEntity } from "../../../../CompanyData/entities/company-data.entity";
import { ICompanyDataRepository } from "../../../../CompanyData/repositories/company-data.repository";


export class CompanyDataPrismaRepository implements ICompanyDataRepository{
    
<<<<<<< HEAD
=======
    
    
>>>>>>> correct-nodejs-backend/main
    async saveOrUpdate(data: CompanyDataEntity): Promise<CompanyDataEntity> {
        const companyData = await prismaClient.companyData.upsert({
            where:{
                cnpj: data.cnpj
            },
            create:{
                corporate_name: data.corporate_name,
                cnpj: data.cnpj,
<<<<<<< HEAD
                cnae_id: data.cnae_id,
=======
>>>>>>> correct-nodejs-backend/main
                classification: data.classification,
                total_employees: data.total_employees,
                phone_1: data.phone_1,
                phone_2: data.phone_2,
                company_user_id: data.company_user_id,
                correct_admin_id: data.correct_admin_id
            },
            update:{
                corporate_name: data.corporate_name,
<<<<<<< HEAD
                cnae_id: data.cnae_id,
=======
>>>>>>> correct-nodejs-backend/main
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
<<<<<<< HEAD
        const companyData = await prismaClient.companyData.findFirst({
=======
        const companyData = await prismaClient.companyData.findUnique({
>>>>>>> correct-nodejs-backend/main
            where:{
                company_user_id: id
            }
        })

        return companyData
    }

    async findByCorrectAdminAndCnpj(correct_admin_id: string, cnpj: string): Promise<CompanyDataEntity | null> {
        const companyData = await prismaClient.companyData.findFirst({
            where:{
                correct_admin_id: correct_admin_id,
                cnpj
            }
        })

        return companyData
    }

<<<<<<< HEAD
=======
    async deleteByCorrect(cnpj: string): Promise<void> {
        await prismaClient.companyData.delete({
            where:{
                cnpj
            }
        })
        
    }
>>>>>>> correct-nodejs-backend/main
}