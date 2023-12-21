import { Router, response } from "express";
import { companyUserController } from "../../modules/Company/CompanyUser/usecases/create-company-user";
import { authCompanyUserController } from "../../modules/Company/CompanyUser/usecases/authenticate-company-user";
import { companyIsAuth } from "../../infra/shared/middlewares/CompanyAdmin/company-admin-auth.middlware";
import { companyUserDetailsController } from "../../modules/Company/CompanyUser/usecases/company-user-details";

export const companyUserRouter = Router()

companyUserRouter.post('/company-user', async (request, response) => {
    await companyUserController.handle(request, response)
})

companyUserRouter.post('/company-user-login', async (request, response) => {
    await authCompanyUserController.handle(request, response)
})

companyUserRouter.get('/company-user-details', companyIsAuth, async (request, response) => {
    await companyUserDetailsController.handle(request, response)
})