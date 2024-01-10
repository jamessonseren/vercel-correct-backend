<<<<<<< HEAD
=======
import { CompanyTypeOptions } from "@prisma/client";
>>>>>>> correct-nodejs-backend/main
import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { CompanyTypeEntity } from "../../entities/company-type.entity";
import { ICompanyTypeRepository } from "../company-type.repository";

export class CompanyTypePrismaRepository implements ICompanyTypeRepository{
   
<<<<<<< HEAD
    async findByCompanyAdminId(companyUserId: string): Promise<CompanyTypeEntity | null> {
=======

    async findByCompanyUserId(companyUserId: string): Promise<CompanyTypeEntity | null> {
>>>>>>> correct-nodejs-backend/main
        return await prismaClient.companyType.findFirst({
            where:{
                company_user_id: companyUserId
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
                company_user_id: data.company_user_id
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

    async findByCNPJ(cnpj: string): Promise<CompanyTypeEntity | null>{
        return await prismaClient.companyType.findUnique({
            where:{
                cnpj
            }
        })
    }
<<<<<<< HEAD
=======

    async updateByCorrect(cnpj: string, type: CompanyTypeOptions): Promise<CompanyTypeEntity> {
        return await prismaClient.companyType.update({
            where:{
                cnpj
            },
            data:{
                type: type
            }
        })
    }

    async deleteByCorrect(cnpj: string): Promise<void> {
        await prismaClient.companyType.delete({
            where:{
                cnpj
            }
        })
    }
>>>>>>> correct-nodejs-backend/main
}