import { Request, Response } from "express";
import { ICards } from "../../repositories/cards-repository";
import { GetCardsUsecase } from "./get-cards.usecase";

export class GetCardsController{
    constructor(
        private cardsRepository: ICards
    ){}

    async handle(req: Request, res: Response){

        try{

            const getCardsUsecase = new GetCardsUsecase(this.cardsRepository)

            const cards = await getCardsUsecase.execute()

            return res.json(cards)
            
        }catch(err: any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}