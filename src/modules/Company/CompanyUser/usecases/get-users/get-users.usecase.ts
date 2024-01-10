import { CustomError } from "../../../../../errors/custom.error";
import { ICompanyUserRepository } from "../../repositories/company-user.repository";

export class GetUsersUsecase {
    constructor(
        private companyUserRepository: ICompanyUserRepository
    ) {}

    async execute(user_code: string){

        const getUsers = await this.companyUserRepository.findByUserCode(user_code)
        if(!getUsers) throw new CustomError("Users not found", 401)

        return getUsers
    }
}