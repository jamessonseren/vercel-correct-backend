import { CompanyAddressPrismaRepository } from "../../repositories/implemenatios/company-address-prisma.repository";
import { GetCompanyAddressController } from "./get-company-address.controller";

const companyAddressRepository = new CompanyAddressPrismaRepository()
const getCompanyAddressController = new GetCompanyAddressController(companyAddressRepository)

export { getCompanyAddressController }