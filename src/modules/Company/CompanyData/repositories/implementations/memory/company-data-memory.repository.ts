import { CustomError } from "../../../../../../errors/custom.error";
import { CompanyDataEntity } from "../../../../CompanyData/entities/company-data.entity";
import { ICompanyDataRepository } from "../../../../CompanyData/repositories/company-data.repository";

export class CompanyDataMemoryRepository implements ICompanyDataRepository{
    

    items: CompanyDataEntity[] = []

    async saveOrUpdate(data: CompanyDataEntity): Promise<CompanyDataEntity> {
        const index = this.items.findIndex(company => company.cnpj == company.cnpj)
        if(index >= 0){
            this.items[index] = {
                corporate_name: data.corporate_name,
                cnpj: data.cnpj,
                classification: data.classification,
                total_employees: data.total_employees,
                phone_1: data.phone_1,
                phone_2: data.phone_2,
                company_user_id: data.company_user_id,
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

    async findByCompanyAdmin(id: string): Promise<CompanyDataEntity | null> {
        return this.items.find(  item => item.id === id) || null
    }

    async findByCorrectAdminAndCnpj(correct_admin_id: string, cnpj: string): Promise<CompanyDataEntity | null> {
        throw new CustomError("Method not implemented.", 401);
    }

    async deleteByCorrect(cnpj: string): Promise<void> {
        throw new Error("Method not implemented.");
    }


}