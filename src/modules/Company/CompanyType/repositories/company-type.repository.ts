import { CompanyTypeEntity } from "../entities/company-type.entity";

export interface ICompanyTypeRepository{
    findByCompanyAdminId(companyAdminId: string): Promise<CompanyTypeEntity | null>
    saveOrUpdate(data: CompanyTypeEntity): Promise<CompanyTypeEntity>
    findById(id: string): Promise<CompanyTypeEntity | null>
    findByCNPJ(cnpj: string): Promise<CompanyTypeEntity | null>
}