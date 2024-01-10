import { CompanyAddressEntity } from "../entities/company-address.entity";


export interface ICompanyAddressRepository{
    saveOrUpdate(data: CompanyAddressEntity): Promise<CompanyAddressEntity>
    findById(id: string): Promise<CompanyAddressEntity | null>
    findByCnpj(cnpj: string): Promise<CompanyAddressEntity | null>
}