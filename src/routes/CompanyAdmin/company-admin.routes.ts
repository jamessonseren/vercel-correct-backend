import { Router, response } from "express";
import { companyAdminController } from "../../modules/Company/usecases/company-admin/create-company-admin";
import { authCompanyAdminController } from "../../modules/Company/usecases/company-admin/authenticate-company-admin";

export const companyAdminRouter = Router()

companyAdminRouter.post('/company-admin', async (request, response) => {
    await companyAdminController.handle(request, response)
})

companyAdminRouter.post('/login-company-admin', async (request, response) => {
    await authCompanyAdminController.handle(request, response)
})
