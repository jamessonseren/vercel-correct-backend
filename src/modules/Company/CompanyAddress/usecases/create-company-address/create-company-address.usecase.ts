import { CustomError } from "../../../../../errors/custom.error";
import { ICompanyDataRepository } from "../../../CompanyData/repositories/company-data.repository";
import { CompanyAddressEntity, CompanyAddressProps } from "../../entities/company-address.entity";
import { ICompanyAddressRepository } from "../../repositories/company-address.repository";

export class CreateCompanyAddressUsecase{
    constructor(
        private companyAddressRepository: ICompanyAddressRepository,
        private companyDataRepository: ICompanyDataRepository
    ){}

    async execute(data: CompanyAddressProps){

        //check if company data is already registered
        const companyData = await this.companyDataRepository.findByCNPJ(data.cnpj)
        if(!companyData) throw new CustomError("Company Data must be registered first", 400)

        const companyAddress = CompanyAddressEntity.create(data)

        const createCompanyAddress = await this.companyAddressRepository.saveOrUpdate(companyAddress)

        return createCompanyAddress

    }
}