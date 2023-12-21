import { CompanyDataPrismaRepository } from "../../../../Company/CompanyData/repositories/implementations/prisma/company-data-prisma.repository"
import { CompanyTypePrismaRepository } from "../../../../Company/CompanyType/repositories/implementatios/company-type.prisma.repository"
import { CardsPrismaRepository } from "../../../CardsByCorrect/repositories/implementations/cards-prisma.repository"
import { EmployerCardsPrismaRepository } from "../../../EmployerCards/repositories/implementations/employer-card-prisma.repository"
import { PartnerCardPrismaRepository } from "../../../PartnerCards/repositories/implementations/partner-card-prisma.repository"
import { ActivateBusinessCardsByCorrectController } from "./activate-business-cards-by-correct.controller"


const partnerCardRepository = new PartnerCardPrismaRepository()
const employerCardRepository = new EmployerCardsPrismaRepository()
const companyTypeRepository = new CompanyTypePrismaRepository()
const companyDataRepository = new CompanyDataPrismaRepository()
const cards = new CardsPrismaRepository()

const activateBusinessCardController = new ActivateBusinessCardsByCorrectController(
    partnerCardRepository,
    employerCardRepository,
    companyTypeRepository,
    companyDataRepository,
    cards
)

export { activateBusinessCardController }