import { CompanyTypeOptions } from "@prisma/client";
import { CustomError } from "../../../../../errors/custom.error";
import { ICompanyTypeRepository } from "../../repositories/company-type.repository";

export class UpdateCompanyTypeByCorrectUsecase{
    constructor(
        private companyTypeRepository: ICompanyTypeRepository
    ){}

    async execute(cnpj: string, type: CompanyTypeOptions){

        //find company type
        const findCompany = await this.companyTypeRepository.findByCNPJ(cnpj)
        if(!findCompany) throw new CustomError('Company type not found', 400)

        const updateCompanyType = await this.companyTypeRepository.updateByCorrect(cnpj, type)

        return updateCompanyType

    }
}