import { CompanyDataEntity } from "../entities/company-data.entity";

export interface ICompanyDataRepository{
    saveOrUpdate(data: CompanyDataEntity): Promise<CompanyDataEntity>
    findByCNPJ(cnpj: string): Promise<CompanyDataEntity | null>
    findByCompanyAdmin(id: string): Promise<CompanyDataEntity | null>
    findByCorrectAdminAndCnpj(correct_admin_id: string, cnpj: string): Promise<CompanyDataEntity | null>
    deleteByCorrect(cnpj: string):Promise<void>
}