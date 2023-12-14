import { Router, response } from "express";
import { secondaryUserController } from "../../modules/Company/CompanySecondaryUser/usecases/create-company-secondary-user";
import { companyIsAuth } from "../../infra/shared/middlewares/CompanyAdmin/company-admin-auth.middlware";

export const companyUserRouter = Router()

companyUserRouter.post('/company-user', companyIsAuth, async (request, response) => {
    await secondaryUserController.handle(request, response)
})

