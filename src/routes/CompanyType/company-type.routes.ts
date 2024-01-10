<<<<<<< HEAD
import { Router } from "express";
import { companyIsAuth } from "../../infra/shared/middlewares/CompanyAdmin/company-admin-auth.middlware";
import { companyTypeController } from "../../modules/Company/CompanyType/usecases/create-company-type";

export const companyTypeRouter = Router()

companyTypeRouter.post('/company-type', companyIsAuth, async (request, response) => {
    await companyTypeController.handle(request, response)
=======
import { Router, response } from "express";
import { companyIsAuth } from "../../infra/shared/middlewares/CompanyAdmin/company-admin-auth.middlware";
import { companyTypeController } from "../../modules/Company/CompanyType/usecases/create-company-type";
import { getCompanyTypeController } from "../../modules/Company/CompanyType/usecases/get-company-type";
import { correctIsAuth } from "../../infra/shared/middlewares/CorrectAdmin/correct-admin-auth.middleware";
import { updateCompanyTypeController } from "../../modules/Company/CompanyType/usecases/update-company-type-by-correct";
import { deleteCompanyTypeController } from "../../modules/Company/CompanyType/usecases/delete-company-type-by-correct";

export const companyTypeRouter = Router()

//create / update company type
companyTypeRouter.post('/company-type', companyIsAuth, async (request, response) => {
    await companyTypeController.handle(request, response)
})


//Get company type
companyTypeRouter.get('/company-type', companyIsAuth, async (request, response) => {
    await getCompanyTypeController.handle(request, response)
} )

//Updat By Correct
companyTypeRouter.put('/company-type', correctIsAuth, async (request, response) => {
    await updateCompanyTypeController.handle(request, response)
})

//Delete By Correct
companyTypeRouter.delete('/company-type', correctIsAuth, async (request, response) => {
    await deleteCompanyTypeController.handle(request, response)
>>>>>>> correct-nodejs-backend/main
})