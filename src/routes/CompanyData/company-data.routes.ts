<<<<<<< HEAD
import { Router } from "express";
import { companyDataController } from "../../modules/Company/CompanyData/usecases/create-company-data";
import { companyIsAuth } from "../../infra/shared/middlewares/CompanyAdmin/company-admin-auth.middlware";
=======
import { Router, request } from "express";
import { companyDataController } from "../../modules/Company/CompanyData/usecases/create-company-data";
import { companyIsAuth } from "../../infra/shared/middlewares/CompanyAdmin/company-admin-auth.middlware";
import { getCompanyDataController } from "../../modules/Company/CompanyData/usecases/get-company-data";
import { correctIsAuth } from "../../infra/shared/middlewares/CorrectAdmin/correct-admin-auth.middleware";
import { deleteCompanyDataController } from "../../modules/Company/CompanyData/usecases/delete-company-data";
>>>>>>> correct-nodejs-backend/main

export const companyDataRouter = Router()

companyDataRouter.post('/company-data', companyIsAuth, async (request, response) => {
    await companyDataController.handle(request, response)
})

<<<<<<< HEAD
=======
companyDataRouter.get("/company-data", companyIsAuth, async (request, response) => {
    await getCompanyDataController.handle(request, response)
})


//Delete by Correct
companyDataRouter.delete("/company-data", correctIsAuth, async (request, response) => {
    await deleteCompanyDataController.handle(request, response)
})
>>>>>>> correct-nodejs-backend/main
