import { CompanyDataEntity } from "../../../../entities/company-data/company-data.entity";
import { ICompanyDataRepository } from "../../company-data.repository";

export class CompanyDataMemoryRepository implements ICompanyDataRepository{

    items: CompanyDataEntity[] = []

    async saveOrUpdate(data: CompanyDataEntity): Promise<CompanyDataEntity> {
        const index = this.items.findIndex(company => company.cnpj == company.cnpj)
        if(index >= 0){
            this.items[index] = {
                corporate_name: data.corporate_name,
                cnpj: data.cnpj,
                cnae_id: data.cnae_id,
                classification: data.classification,
                total_employees: data.total_employees,
                phone_1: data.phone_1,
                phone_2: data.phone_2,
                company_admin_id: data.company_admin_id,
                correct_admin_id: data.correct_admin_id,
                id: data.id
            }
        }else{
            this.items.push(data)
        }

        return data
    }
    async findByCNPJ(cnpj: string): Promise<CompanyDataEntity | null> {
        return this.items.find(  item => item.cnpj === cnpj) || null

    }

}