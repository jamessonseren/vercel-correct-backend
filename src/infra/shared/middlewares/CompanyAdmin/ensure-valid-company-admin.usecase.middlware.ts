import { ICompanyUserRepository } from "../../../../modules/Company/CompanyUser/repositories/company-user.repository";
import { CustomError } from "../../../../errors/custom.error";

export class EnsureValidCompanyUserUsecase {
    constructor(
        private companyUserRepository: ICompanyUserRepository
    ) { }
    async execute(id: string) {
        const user = await this.companyUserRepository.findById(id)

        if (!user) throw new CustomError("User is not allowed to access", 401)

        // if (User.client_User === false) throw new CustomError("User is not allowed to access", 401)

        return {user}
    }
}