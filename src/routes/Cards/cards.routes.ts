import { Router, request, response } from "express";
import { correctIsAuth } from "../../infra/shared/middlewares/CorrectAdmin/correct-admin-auth.middleware";
import { createCardsController } from "../../modules/Cards/CardsByCorrect/usecases";
import { companyIsAuth } from "../../infra/shared/middlewares/CompanyAdmin/company-admin-auth.middlware";
import { createPartnerCardController } from "../../modules/Cards/PartnerCards/usecases/create-partner-card-usecase";
import { createEmployerCardController } from "../../modules/Cards/EmployerCards/usecases/create-employer-card";
import { activateBusinessCardController } from "../../modules/Cards/CompanyBusinessCards/usecases/activate-business-cards-by-correct";
import { activatePartnerDebitCardController } from "../../modules/Cards/PartnerCards/usecases/activate-debit-card-by-correct";
import { activateDebitCardController } from "../../modules/Cards/CompanyDebitCards/usecases/activate-debit-cards-by-correct";

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

//Activate Business Cards
cardsRouter.post("/business-cards", correctIsAuth, async (request, response) => {
    await activateBusinessCardController.handle(request, response)
})

//Activate  Debit Card
cardsRouter.post("/debit-cards", correctIsAuth, async (request, response) => {
    await activateDebitCardController.handle(request, response)
})

