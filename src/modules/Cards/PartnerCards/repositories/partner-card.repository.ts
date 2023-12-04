import { PartnerCardsEntity, PartnerCardsProps } from "../entities/partner-cards.entity";

export interface IPartnerCardRepository{
    findByCardId(id: string): Promise<PartnerCardsEntity | null>
    save(data: PartnerCardsProps): Promise<PartnerCardsEntity>
}