import { CustomError } from "../../../../../errors/custom.error";
import { ICards } from "../../repositories/cards-repository";

export class GetCardsUsecase {
    constructor(
        private cardsRepository: ICards
    ){}

    async execute(){

        const getCards = await this.cardsRepository.findAllCards()
        if(!getCards) throw new CustomError("Cards not found", 400)

        return getCards
    }
}