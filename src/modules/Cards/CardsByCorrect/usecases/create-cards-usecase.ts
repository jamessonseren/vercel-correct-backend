import { CustomError } from "../../../../errors/custom.error";
import { CardsEntity, CardsProps } from "../entities/cards.entity";
import { ICards } from "../repositories/cards-repository";

export class CreateCardsUsecase {
    constructor(
        private cardsRepository: ICards,
    ){}
    async execute(data: CardsProps){
        const card = await CardsEntity.create(data)

        //check if card already exists
        const cardAlreadyExists = await this.cardsRepository.findByName(data.card_name)
        if(cardAlreadyExists) throw new CustomError("Card Already registered", 401)

        //create new card
        const createCard = await this.cardsRepository.saveOrUpdate(card)

        return createCard
    }
}