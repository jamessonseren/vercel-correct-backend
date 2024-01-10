import { CompanyTypeOptions } from "@prisma/client";
import { CustomError } from "../../../../../errors/custom.error";
import { ICompanyDataRepository } from "../../repositories/company-data.repository";

export class DeleteCompanyDataByCorrectUsecase{
    constructor(
        private companyDataRepository: ICompanyDataRepository
    ){}

    async execute(cnpj: string){

        //find company tData      
        const findCompany = await this.companyDataRepository.findByCNPJ(cnpj)
        if(!findCompany) throw new CustomError('Company data not found', 400)

        const deleteCompanyData = await this.companyDataRepository.deleteByCorrect(cnpj)

        return deleteCompanyData

    }
}