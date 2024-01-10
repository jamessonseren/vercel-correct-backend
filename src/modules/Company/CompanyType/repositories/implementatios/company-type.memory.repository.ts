import { $Enums } from "@prisma/client";
import { CompanyTypeEntity } from "../../entities/company-type.entity";
import { ICompanyTypeRepository } from "../company-type.repository";

export class CompanyTypeMemoryRepository implements ICompanyTypeRepository {


    items: CompanyTypeEntity[] = []

    async findByCompanyUserId(companyUserId: string): Promise<CompanyTypeEntity | null> {

        return this.items.find(company => company.company_user_id === companyUserId) || null
    }

    async saveOrUpdate(data: CompanyTypeEntity): Promise<CompanyTypeEntity> {
        const index = this.items.findIndex(company => company.cnpj == company.cnpj)
        if (index >= 0) {
            this.items[index] = {
                cnpj: data.cnpj,
                company_user_id: data.company_user_id,
                type: data.type,
                id: data.id
            }
        } else {
            this.items.push(data)
        }

        return data
    }

    async findById(id: string): Promise<CompanyTypeEntity | null> {
        return this.items.find(company => company.id === id) || null

    }

    async findByCNPJ(cnpj: string): Promise<CompanyTypeEntity | null> {

        return this.items.find(company => company.cnpj === cnpj) || null
    }

    updateByCorrect(cnpj: string, type: $Enums.CompanyTypeOptions): Promise<CompanyTypeEntity> {
        throw new Error("Method not implemented.");
    }
    deleteByCorrect(cnpj: string): Promise<void> {
        throw new Error("Method not implemented.");
    }


}
