import { CompanyDataPrismaRepository } from "../../../../Company/CompanyData/repositories/implementations/prisma/company-data-prisma.repository";
import { CompanyTypePrismaRepository } from "../../../../Company/CompanyType/repositories/implementatios/company-type.prisma.repository";
import { PartnerCardPrismaRepository } from "../../repositories/implementations/partner-card-prisma.repository";
import { CreatePartnerCardController } from "./create-partner-card.controller";

const partnerCardRepository = new PartnerCardPrismaRepository()
const companyTypeRepository = new CompanyTypePrismaRepository()
const companyDataRepository = new CompanyDataPrismaRepository()

const createPartnerCardController = new CreatePartnerCardController(
    partnerCardRepository,
    companyTypeRepository,
    companyDataRepository
)

export { createPartnerCardController }