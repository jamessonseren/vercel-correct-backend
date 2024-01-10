import { CompanyUserPrismaRepository } from "../../repositories/implementations/company-user.prisma.repository";
import { UpdateUserbyAdminController } from "./update-user-by-admin.controller";

const companyUserRepository = new CompanyUserPrismaRepository()
const updateUserController = new UpdateUserbyAdminController(companyUserRepository)

export { updateUserController }