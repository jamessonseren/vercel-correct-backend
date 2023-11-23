import { Router } from "express";
import { correctAdminRouter } from "./CorrectAdmin/correct-admin.routes";
import { companyAdminRouter } from "./CompanyAdmin/company-admin.routes";
import { companyDataRouter } from "./CompanyData/company-data.routes";
import { companyTypeRouter } from "./CompanyType/company-type.routes";

const router = Router()

router.use(correctAdminRouter)
router.use(companyAdminRouter)
router.use(companyDataRouter)
router.use(companyTypeRouter)

export { router }