import { Router } from "express";
import { companyDataController } from "../../modules/Company/usecases/company-data/create-company-data";
import { companyIsAuth } from "../../infra/shared/middlewares/CompanyAdmin/company-admin-auth.middlware";

export const companyDataRouter = Router()

companyDataRouter.post('/company-data', companyIsAuth, async (request, response) => {
    await companyDataController.handle(request, response)
})

