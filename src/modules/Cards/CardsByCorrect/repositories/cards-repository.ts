import { CardsEntity, CardsProps } from "../entities/cards.entity";

export interface ICards{
    findById(id: string): Promise<CardsEntity | null>
    findByName(name: string): Promise<CardsEntity | null>
<<<<<<< HEAD
=======
    findAllCards(): Promise<CardsEntity[] | null>
>>>>>>> correct-nodejs-backend/main
    saveOrUpdate(data: CardsEntity): Promise<CardsEntity>
}