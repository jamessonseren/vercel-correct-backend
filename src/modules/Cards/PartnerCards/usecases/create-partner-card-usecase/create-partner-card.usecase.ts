import { CustomError } from "../../../../../errors/custom.error";
import { ICompanyDataRepository } from "../../../../Company/CompanyData/repositories/company-data.repository";
import { ICompanyTypeRepository } from "../../../../Company/CompanyType/repositories/company-type.repository";
import { PartnerCardsEntity, PartnerCardsProps } from "../../entities/partner-cards.entity";
import { IPartnerCardRepository } from "../../repositories/partner-card.repository";

export class CreatePartnerCardsUsecase {
    constructor(
        private partnerCardRepository: IPartnerCardRepository,
        private companyTypeRepository: ICompanyTypeRepository,
        private companyDataRepository: ICompanyDataRepository
    ) { }

    async execute(data: PartnerCardsProps, companyAdminId: string) {

        const partnerCard = await PartnerCardsEntity.create(data)

        //check if company data is already registered
        const findCompanyData = await this.companyDataRepository.findByCompanyAdmin(companyAdminId)
        if (!findCompanyData) throw new CustomError("Company data must be completed", 400)

        //check if company type is already registered
        const findCompanyType = await this.companyTypeRepository.findByCompanyAdminId(companyAdminId)
        if (!findCompanyType) throw new CustomError("Company type must be registered first", 400)

        //check if card is already hired - find by Card Id FK
        const findBycardId = await this.partnerCardRepository.findByCardId(data.card_id)
        if (findBycardId) throw new CustomError("Card is already hired", 409)

        partnerCard.company_type_id = findCompanyType.id

        const hireCard = await this.partnerCardRepository.save(partnerCard)

        return hireCard
    }

    private async endDayCycle(start_day: number) {
        let currentDate = new Date()
        let currentMonth = currentDate.getMonth() + 1
        let currentYear = currentDate.getFullYear() + 1

        let end_day

        let monthsWith30Days = [4, 6, 9, 11]

        if (monthsWith30Days.includes(currentMonth)) {
            end_day = start_day + 29
        } else if (currentMonth === 2) {

            if ((currentYear % 4 == 0 && currentYear % 100 != 0) || currentYear % 400 == 0) {
                end_day = start_day + 28
            } else {
                end_day = start_day + 27
            }
        } else{
            end_day = start_day + 30
        }

        if(end_day > 31){
            end_day = end_day - 31
        }

        return end_day
    }
}