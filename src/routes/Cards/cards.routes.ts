import { Router, request, response } from "express";
import { correctIsAuth } from "../../infra/shared/middlewares/CorrectAdmin/correct-admin-auth.middleware";
import { createCardsController } from "../../modules/Cards/CardsByCorrect/usecases";
import { companyIsAuth } from "../../infra/shared/middlewares/CompanyAdmin/company-admin-auth.middlware";
import { createPartnerCardController } from "../../modules/Cards/PartnerCards/usecases/create-partner-card-usecase";
import { createEmployerCardController } from "../../modules/Cards/EmployerCards/usecases/create-employer-card";

const cardsRouter = Router()


//correct routes
cardsRouter.post("/cards", correctIsAuth, async (request, response) => {
    await createCardsController.handle(request, response)
})


//partner routes
cardsRouter.post("/partner-cards", companyIsAuth, async (request, response) => {
    await createPartnerCardController.handle(request, response)
})


//employer routes
cardsRouter.post("/employer-cards", companyIsAuth, async (request, response) => {
    await createEmployerCardController.handle(request, response)
})
export { cardsRouter }