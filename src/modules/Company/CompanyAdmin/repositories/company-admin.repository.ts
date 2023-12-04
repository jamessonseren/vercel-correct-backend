import { CompanyAdminEntity } from "../entities/company-admin.entity"
import {CompanyAdminResponse } from "./implementations/company-admin.prisma.repository"

export interface ICompanyAdminRepository{
    findByCNPJAuth(cnpj: string): Promise<CompanyAdminEntity | null>
    findByCNPJ(cnpj: string): Promise<CompanyAdminResponse | null>
    findById(id: string): Promise<CompanyAdminEntity | null>
    findByEmail(email: string): Promise<CompanyAdminEntity | null>
    save(data: CompanyAdminEntity): Promise<CompanyAdminResponse>
}