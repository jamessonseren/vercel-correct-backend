import { Router, response } from "express";
import { companyAdminController } from "../../modules/Company/CompanyAdmin/usecases/create-company-admin";
import { authCompanyAdminController } from "../../modules/Company/CompanyAdmin/usecases/authenticate-company-admin";

export const companyAdminRouter = Router()

companyAdminRouter.post('/company-admin', async (request, response) => {
    await companyAdminController.handle(request, response)
})

companyAdminRouter.post('/login-company-admin', async (request, response) => {
    await authCompanyAdminController.handle(request, response)
})
