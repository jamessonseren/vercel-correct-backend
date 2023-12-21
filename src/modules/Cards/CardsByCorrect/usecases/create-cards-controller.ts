import { Request, Response } from "express";
import { ICards } from "../repositories/cards-repository";
import { CreateCardsUsecase } from "./create-cards-usecase";
import { CardsProps } from "../entities/cards.entity";

export class CreateCardsController {
    constructor(
        private cardsRepository: ICards,


    ) { }
    async handle(req: Request, res: Response) {

        try {
            const correct_admin_id = req.correctAdminId

            const data: CardsProps = req.body

            const cardUsecase = new CreateCardsUsecase(this.cardsRepository)

            const card = await cardUsecase.execute({ ...data, correct_admin_id })

            return res.json(card)
        } catch (err: any) {
            res.status(err.statusCode).json({
                error: err.message
            })
        }

    }
}