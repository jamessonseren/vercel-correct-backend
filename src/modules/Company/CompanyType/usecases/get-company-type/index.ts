import { CompanyTypePrismaRepository } from "../../repositories/implementatios/company-type.prisma.repository";
import { GetCompanyTypeController } from "./get-company-type.controller";

const companyTypeRepository = new CompanyTypePrismaRepository()
const getCompanyTypeController = new GetCompanyTypeController(companyTypeRepository)

export { getCompanyTypeController }