import { CustomError } from "../../../../../errors/custom.error";
import { ICompanyDataRepository } from "../../../../Company/CompanyData/repositories/company-data.repository";
import { ICompanyTypeRepository } from "../../../../Company/CompanyType/repositories/company-type.repository";
import { ICards } from "../../../CardsByCorrect/repositories/cards-repository";
import { PartnerCardsEntity, PartnerCardsProps } from "../../entities/partner-cards.entity";
import { IPartnerCardRepository } from "../../repositories/partner-card.repository";

export class ActivatePartnerDebitCardUsecase {
    constructor(
        private partnerCardRepository: IPartnerCardRepository,
        private companyTypeRepository: ICompanyTypeRepository,
        private companyDataRepository: ICompanyDataRepository,
        private cardsRepository: ICards

    ) { }

    async execute(data: PartnerCardsProps, cnpj: string) {
        if (!cnpj) throw new CustomError("CNPJ is required", 401)

        const debitCard = await PartnerCardsEntity.create(data)

        //check if company data is already registered
        const findCompanyData = await this.companyDataRepository.findByCNPJ(cnpj)
        if (!findCompanyData) throw new CustomError("Company data must be completed", 400)

        //check if company type is already registered
        const findCompanyType = await this.companyTypeRepository.findByCNPJ(cnpj)
        if (!findCompanyType) throw new CustomError("Company type must be registered first", 400)

        if (findCompanyType.type.endsWith('comercio')) {

            debitCard.company_type_id = findCompanyType.id
    
    
            //get Debit card from card table
            const getDebitCard = await this.cardsRepository.findByName("Debito")
            if (!getDebitCard) throw new CustomError("Unable to find Debit Card - Check debit card name", 400)
    
            debitCard.card_id = getDebitCard.id
    
            //check if debit card is already registered
            const findBycardId = await this.partnerCardRepository.findByCardIdAndCompanyTypeId(debitCard.card_id, findCompanyType.id)
            if (findBycardId) throw new CustomError("Debit Card is already registered", 409)
    
            const registerDebitCard = await this.partnerCardRepository.save(debitCard)
    
            return registerDebitCard
        }else{
            throw new CustomError("Company type must be Comercio or both", 400)
        }
    }
}