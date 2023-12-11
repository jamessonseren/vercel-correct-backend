import { CompanyDataPrismaRepository } from "../../../../Company/CompanyData/repositories/implementations/prisma/company-data-prisma.repository"
import { CompanyTypePrismaRepository } from "../../../../Company/CompanyType/repositories/implementatios/company-type.prisma.repository"
import { CardsPrismaRepository } from "../../../CardsByCorrect/repositories/implementations/cards-prisma.repository"
import { PartnerCardPrismaRepository } from "../../repositories/implementations/partner-card-prisma.repository"
import { ActivatePartnerDebitCardByCorrectController } from "./activate-debit-card-by-correct.controller"

const partnerCardRepository = new PartnerCardPrismaRepository()
const companyTypeRepository = new CompanyTypePrismaRepository()
const companyDataRepository = new CompanyDataPrismaRepository()
const cards = new CardsPrismaRepository()

const activatePartnerDebitCardController = new ActivatePartnerDebitCardByCorrectController(
    partnerCardRepository,
    companyTypeRepository,
    companyDataRepository,
    cards
)

export { activatePartnerDebitCardController }
