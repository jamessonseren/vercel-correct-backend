import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { PartnerCardsEntity, PartnerCardsProps } from "../../entities/partner-cards.entity";
import { IPartnerCardRepository } from "../partner-card.repository";

export class PartnerCardPrismaRepository implements IPartnerCardRepository {
   
   

    async findByCardId(id: string): Promise<PartnerCardsEntity | null> {
        const partnerCard = await prismaClient.partnerCards.findFirst({
            where: {
                card_id: id
            }
        })

        return partnerCard
    }
    async findByCardIdAndCompanyTypeId(id: string, company_type: string): Promise<PartnerCardsEntity | null> {
        const partnerCard = await prismaClient.partnerCards.findFirst({
            where: {
                card_id: id,
                company_type_id: company_type
            }
        })

        return partnerCard
    }

    async save(data: PartnerCardsProps): Promise<PartnerCardsEntity> {
        const partnerCard = await prismaClient.partnerCards.create({
            data: {
                card_id: data.card_id,
                company_type_id: data.company_type_id,
                adm_correct_fee: data.adm_correct_fee,
                mkt_correct_fee: data.mkt_correct_fee,
                total_installments: data.total_installments,
                cashback: data.cashback
               
            }
        })

        return partnerCard
    }

    async saveBusinessCard(data: PartnerCardsProps): Promise<PartnerCardsEntity> {
        const businessCard = await prismaClient.partnerCards.create({
            data: {
                card_id: data.card_id,
                company_type_id: data.company_type_id,
                adm_correct_fee: data.adm_correct_fee,
                mkt_correct_fee: data.mkt_correct_fee,
                total_installments: data.total_installments,
                cashback: data.cashback
               
            }
        })

        return businessCard
    }


}