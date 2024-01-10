import { CustomError } from "../../../../../errors/custom.error";
import { CompanyUserEntity, CompanyUserProps } from "../../entities/company-user.entity";
import { ICompanyUserRepository } from "../../repositories/company-user.repository";

export class UpdateUserByAdminUsecase{
    constructor(
        private companyUserRepository: ICompanyUserRepository
    ){}

    async execute(data: CompanyUserProps){

        //check if user exists
        const findUser = await this.companyUserRepository.findByUserNameAndCNPJAuth(data.user_name, data.cnpj)
        if(!findUser) throw new CustomError("Unable to find user")

        //update user
        const updateUser = await this.companyUserRepository.updateUser(data)

        return updateUser
    }
}