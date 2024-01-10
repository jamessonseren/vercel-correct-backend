import { CompanyTypePrismaRepository } from "../../repositories/implementatios/company-type.prisma.repository";
import { DeleteCompanyTypeByCorrectController } from "./delete-company-type-by-correct.controller";

const companyTypeRepository = new CompanyTypePrismaRepository()

const deleteCompanyTypeController = new DeleteCompanyTypeByCorrectController(companyTypeRepository)

export { deleteCompanyTypeController }