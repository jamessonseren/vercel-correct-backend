import { CustomError } from "../../../../errors/custom.error";
import { CardsEntity, CardsProps } from "../entities/cards.entity";
import { ICards } from "../repositories/cards-repository";

export class CreateCardsUsecase {
    constructor(
        private cardsRepository: ICards
    ){}
    async execute(data: CardsProps){
        const card = await CardsEntity.create(data)

        const createCard = await this.cardsRepository.saveOrUpdate(card)

        return createCard
    }
}