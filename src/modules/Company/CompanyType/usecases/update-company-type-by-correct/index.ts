import { CompanyTypePrismaRepository } from "../../repositories/implementatios/company-type.prisma.repository";
import { UpdateCompanyTypeByCorrectController } from "./update-company-type-by-correct.controller";

const companyTypeRepository = new CompanyTypePrismaRepository()

const updateCompanyTypeController = new UpdateCompanyTypeByCorrectController(companyTypeRepository)

export { updateCompanyTypeController }