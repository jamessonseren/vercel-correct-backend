import { CompanySecondaryUserEntity } from "../entities/company-secondary-user.entity";

export type CompanySecondaryUserResponse = {
    id: string
    cnpj: string
    user_name: string
    company_admin_id: string


}
export interface ICompanySecondaryUserRepository{
    findByIdAuth(id: string): Promise<CompanySecondaryUserEntity | null>
    findById(id: string): Promise<CompanySecondaryUserResponse | null>
    findByCnpjAndUsername(cnpj: string, user_name: string): Promise<CompanySecondaryUserResponse | null>
    saveOrUpdate(data: CompanySecondaryUserEntity): Promise<CompanySecondaryUserResponse>
}