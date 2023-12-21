import { PartnerCardsEntity, PartnerCardsProps } from "../../entities/partner-cards.entity";
import { IPartnerCardRepository } from "../partner-card.repository";

export class PartnerCardsMemoryRepository implements IPartnerCardRepository{
    findByCardIdAndCompanyTypeId(id: string, company_type: string): Promise<PartnerCardsEntity | null> {
        throw new Error("Method not implemented.");
    }
    saveBusinessCard(data: PartnerCardsProps): Promise<PartnerCardsEntity> {
        throw new Error("Method not implemented.");
    }

    items: PartnerCardsEntity[] = []

    
    async findByCardId(id: string): Promise<PartnerCardsEntity | null> {
        return this.items.find( item => item.id === id) || null
    }

    async save(data: PartnerCardsEntity): Promise<PartnerCardsEntity> {
        this.items.push(data)

        return data
    }

}