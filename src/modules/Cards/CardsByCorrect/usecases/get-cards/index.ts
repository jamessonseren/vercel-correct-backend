import { CardsPrismaRepository } from "../../repositories/implementations/cards-prisma.repository";
import { GetCardsController } from "./get-cards.controller";

const cardsRepository = new CardsPrismaRepository()
const getCardsController = new GetCardsController(cardsRepository)

export { getCardsController }