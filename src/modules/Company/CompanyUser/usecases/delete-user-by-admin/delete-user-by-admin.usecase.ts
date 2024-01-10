import { ICompanyUserRepository } from "../../repositories/company-user.repository";

export class DeleteUserByAdminUsecase{
    constructor(
        private companyUserRepository: ICompanyUserRepository
    ){}

    async execute(user_id: string){

        const deleteUser = await this.companyUserRepository.deleteByAdminById(user_id)

        return deleteUser
    }
}