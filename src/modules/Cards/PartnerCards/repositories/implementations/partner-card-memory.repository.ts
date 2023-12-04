import { PartnerCardsEntity, PartnerCardsProps } from "../../entities/partner-cards.entity";
import { IPartnerCardRepository } from "../partner-card.repository";

export class PartnerCardsMemoryRepository implements IPartnerCardRepository{

    items: PartnerCardsEntity[] = []

    
    async findByCardId(id: string): Promise<PartnerCardsEntity | null> {
        return this.items.find( item => item.id === id) || null
    }

    async save(data: PartnerCardsEntity): Promise<PartnerCardsEntity> {
        this.items.push(data)

        return data
    }

}