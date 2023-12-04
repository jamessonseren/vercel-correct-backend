import { CompanyTypeEntity } from "../../entities/company-type.entity";
import { ICompanyTypeRepository } from "../company-type.repository";

export class CompanyTypeMemoryRepository implements ICompanyTypeRepository{
    

    items: CompanyTypeEntity[] = []

    async findByCompanyAdminId(companyAdminId: string): Promise<CompanyTypeEntity | null> {

        return this.items.find(company => company.company_admin_id === companyAdminId) || null
    }

    async saveOrUpdate(data: CompanyTypeEntity): Promise<CompanyTypeEntity> {
        const index = this.items.findIndex(company => company.cnpj == company.cnpj)
        if(index >= 0){
            this.items[index] = {
                cnpj: data.cnpj,
                company_admin_id: data.company_admin_id,
                type: data.type,
                id: data.id
            }
        }else{
            this.items.push(data)
        }

        return data
    }

    async findById(id: string): Promise<CompanyTypeEntity | null> {
        return this.items.find(company => company.id === id) || null

    }

}