import { Router } from "express";
import { companyIsAuth } from "../../infra/shared/middlewares/CompanyAdmin/company-admin-auth.middlware";
import { companyTypeController } from "../../modules/Company/CompanyType/usecases/create-company-type";

export const companyTypeRouter = Router()

companyTypeRouter.post('/company-type', companyIsAuth, async (request, response) => {
    await companyTypeController.handle(request, response)
})