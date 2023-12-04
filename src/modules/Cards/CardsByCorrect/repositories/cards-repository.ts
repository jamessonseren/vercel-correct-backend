import { CardsEntity, CardsProps } from "../entities/cards.entity";

export interface ICards{
    findById(id: string): Promise<CardsEntity | null>
    findByName(name: string): Promise<CardsEntity | null>
    saveOrUpdate(data: CardsEntity): Promise<CardsEntity>
}