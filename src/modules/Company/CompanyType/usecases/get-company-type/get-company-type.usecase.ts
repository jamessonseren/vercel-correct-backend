import { CustomError } from "../../../../../errors/custom.error";
import { ICompanyTypeRepository } from "../../repositories/company-type.repository";

export class GetCompanyTypeUsecase {
    constructor(
        private companyTypeRepository: ICompanyTypeRepository
    ){}

    async execute(cnpj: string){

        const companyType = await this.companyTypeRepository.findByCNPJ(cnpj)
        if(!companyType) throw new CustomError("Company type not registered", 400)

        return companyType
    }
}