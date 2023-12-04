import { CompanyAdminEntity } from "../../entities/company-admin.entity";
import { ICompanyAdminRepository } from "../company-admin.repository";
import { CompanyAdminResponse } from "./company-admin.prisma.repository";

export class CompanyAdminMemoryRepository implements ICompanyAdminRepository{
    
    admin: CompanyAdminEntity[] = []

    async findByCNPJAuth(cnpj: string): Promise<CompanyAdminEntity | null> {
        return this.admin.find(admin => admin.cnpj === cnpj) || null
    }
    async findByCNPJ(cnpj: string): Promise<CompanyAdminResponse | null> {
        return this.admin.find(admin => admin.cnpj === cnpj) || null
    }
    
    async findById(id: string): Promise<CompanyAdminEntity | null> {
        return this.admin.find(admin => admin.id === id) || null
    }

    async findByEmail(email: string): Promise<CompanyAdminEntity | null> {
        return this.admin.find(admin => admin.email === email) || null
    }

    async save(data: CompanyAdminEntity): Promise<CompanyAdminEntity> {
        this.admin.push(data)
        return data

    }

}