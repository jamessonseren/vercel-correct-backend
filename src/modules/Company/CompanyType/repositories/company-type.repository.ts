import { CompanyTypeOptions } from "@prisma/client";
import { CompanyTypeEntity } from "../entities/company-type.entity";

export interface ICompanyTypeRepository{
    findByCompanyUserId(companyUserId: string): Promise<CompanyTypeEntity | null>
    saveOrUpdate(data: CompanyTypeEntity): Promise<CompanyTypeEntity>
    findById(id: string): Promise<CompanyTypeEntity | null>
    findByCNPJ(cnpj: string): Promise<CompanyTypeEntity | null>
    updateByCorrect(cnpj: string, type: CompanyTypeOptions): Promise<CompanyTypeEntity>
    deleteByCorrect(cnpj: string): Promise<void>
}