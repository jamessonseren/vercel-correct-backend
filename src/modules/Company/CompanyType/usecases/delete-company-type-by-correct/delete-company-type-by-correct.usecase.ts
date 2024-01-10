import { CompanyTypeOptions } from "@prisma/client";
import { CustomError } from "../../../../../errors/custom.error";
import { ICompanyTypeRepository } from "../../repositories/company-type.repository";

export class DeleteCompanyTypeByCorrectUsecase{
    constructor(
        private companyTypeRepository: ICompanyTypeRepository
    ){}

    async execute(cnpj: string){

        //find company type
        const findCompany = await this.companyTypeRepository.findByCNPJ(cnpj)
        if(!findCompany) throw new CustomError('Company type not found', 400)

        const deleteCompanyType = await this.companyTypeRepository.deleteByCorrect(cnpj)

        return deleteCompanyType

    }
}