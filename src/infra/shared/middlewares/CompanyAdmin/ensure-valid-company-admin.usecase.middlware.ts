import { ICompanyAdminRepository } from "../../../../modules/Company/CompanyAdmin/repositories/company-admin.repository";
import { CustomError } from "../../../../errors/custom.error";

export class EnsureValidCompanyAdminUsecase {
    constructor(
        private companyAdminRepository: ICompanyAdminRepository
    ) { }
    async execute(id: string) {
        const admin = await this.companyAdminRepository.findById(id)

        if (!admin) throw new CustomError("User is not allowed to access", 401)

        if (admin.status === false) throw new CustomError("Admin is not allowed to access", 401)

        return admin.id
    }
}