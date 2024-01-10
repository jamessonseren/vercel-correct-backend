import { CustomError } from "../../../../../errors/custom.error";
import { ICompanyUserRepository } from "../../repositories/company-user.repository";

export class CompanyUserDetailsUsecase{
    constructor(
        private companyUserRepository: ICompanyUserRepository
    ){}

    async execute(id: string){

        const getUserDetails = await this.companyUserRepository.findById(id)
<<<<<<< HEAD
        if(!getUserDetails) throw new CustomError("User not found", 409)
=======
        if(!getUserDetails) throw new CustomError("User not found", 401)
>>>>>>> correct-nodejs-backend/main

        return getUserDetails
    }
}