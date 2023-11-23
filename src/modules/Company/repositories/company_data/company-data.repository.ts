import { CompanyDataEntity } from "../../entities/company-data/company-data.entity";

export interface ICompanyDataRepository{
    saveOrUpdate(data: CompanyDataEntity): Promise<CompanyDataEntity>
    findByCNPJ(cnpj: string): Promise<CompanyDataEntity | null>
}