import { CustomError } from "../../../../../errors/custom.error";
import { ICompanyDataRepository } from "../../../../Company/CompanyData/repositories/company-data.repository";
import { ICompanyTypeRepository } from "../../../../Company/CompanyType/repositories/company-type.repository";
import { EmployerCardsEntity, EmployerCardsProps } from "../../entities/employer-cards.entity";
import { IEmployercardRepository } from "../../repositories/employer-card.repository";

export class CreateEmployerCardUsecase{
    constructor(
        private employerCardRepository: IEmployercardRepository,
        private companyTypeRepository: ICompanyTypeRepository,
        private companyDataRepository: ICompanyDataRepository
    ){

    }

    async execute(data: EmployerCardsProps, companyAdminId: string){

        const employerCard = await EmployerCardsEntity.create(data)

        //check if company data is already registered
        const findCompanyData = await this.companyDataRepository.findByCompanyAdmin(companyAdminId)
        if(!findCompanyData) throw new CustomError("Company data must be completed", 400)
        
        //check if company type is already registered
        const findCompanyType = await this.companyTypeRepository.findByCompanyAdminId(companyAdminId)
        if (!findCompanyType) throw new CustomError("Company type must be registered first", 400)

        //check if card is already hired
        const findBycardId = await this.employerCardRepository.findByCardIdAndCompanyTypeId(data.card_id, findCompanyType.id)
        if (findBycardId) throw new CustomError("Card is already hired", 409)


        //if everything is ok - set company_type_id
        employerCard.company_type_id = findCompanyType.id

        //create new card
        const hireCard = await this.employerCardRepository.save(employerCard)

        return hireCard

    }
}