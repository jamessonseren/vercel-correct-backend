import { CustomError } from "../../../../../errors/custom.error";
import { CompanyTypeProps, CompanyTypeEntity } from "../../entities/company-type.entity";
import { ICompanyUserRepository } from "../../../CompanyUser/repositories/company-user.repository";
import { ICompanyTypeRepository } from "../../repositories/company-type.repository";

export class CreateCompanyTypeUsecase{

    constructor(
        private companyUserRepository: ICompanyUserRepository,
        private companyTypeRepository: ICompanyTypeRepository
    ){}
    async execute(data: CompanyTypeProps){
        const companyType = await CompanyTypeEntity.create(data)
        
        //find company User by Id
        const companyUser = await this.companyUserRepository.findById(data.company_user_id)

        if(!companyUser) throw new CustomError("Unable to find Company User", 401)
        
        //check if cnpj provided is correct
        if(companyUser.cnpj !== data.cnpj) throw new CustomError("CNPJ must be the same!", 401)

        const registerCompanyType = await this.companyTypeRepository.saveOrUpdate(companyType)

        return registerCompanyType


    }
}