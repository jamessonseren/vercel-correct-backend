import { Router } from "express";
import { correctIsAuth } from "../../infra/shared/middlewares/CorrectAdmin/correct-admin-auth.middleware";
import { createCardsController } from "../../modules/Cards/CardsByCorrect/usecases";
import { companyIsAuth } from "../../infra/shared/middlewares/CompanyAdmin/company-admin-auth.middlware";
import { createPartnerCardController } from "../../modules/Cards/PartnerCards/usecases/create-partner-card-usecase";

const cardsRouter = Router()

cardsRouter.post("/cards", correctIsAuth, async (request, response) => {
    await createCardsController.handle(request, response)
})

cardsRouter.post("/partner-cards", companyIsAuth, async (request, response) => {
    await createPartnerCardController.handle(request, response)
})

export { cardsRouter }