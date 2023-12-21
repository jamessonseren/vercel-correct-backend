// import { CompanyAdminEntity } from "../../entities/company-admin.entity";
// import { ICompanyAdminRepository } from "../company-admin.repository";
// import { CompanyAdminResponse } from "../../companyAdminDto/company-admin.dto";

// export class CompanyAdminMemoryRepository implements ICompanyAdminRepository{
    
//     admin: CompanyAdminResponse[] = []
//     adminAuth: CompanyAdminEntity[] = []

//     async findByCNPJAuth(cnpj: string): Promise<CompanyAdminEntity | null> {
//         return this.adminAuth.find(admin => admin.cnpj === cnpj) || null
//     }
//     async findByCNPJ(cnpj: string): Promise<CompanyAdminResponse | null> {
//         return this.admin.find(admin => admin.cnpj === cnpj) || null
//     }
    
//     async findById(id: string): Promise<CompanyAdminResponse | null> {
//         return this.admin.find(admin => admin.id === id) || null
//     }

//     async findByEmail(email: string): Promise<CompanyAdminResponse | null> {
//         return this.admin.find(admin => admin.email === email) || null
//     }

//      async findByUserNameAndCnpj(user_name: string, cnpj: string): Promise<CompanyAdminResponse | null> {
//         return
//     }

//     async save(data: CompanyAdminEntity): Promise<CompanyAdminResponse> {
//         this.adminAuth.push(data)
//         return

//     }

// }