import { Router } from "express";
import { correctAdminRouter } from "./CorrectAdmin/correct-admin.routes";
import { companyAdminRouter } from "./CompanyAdmin/company-admin.routes";
import { companyDataRouter } from "./CompanyData/company-data.routes";
import { companyTypeRouter } from "./CompanyType/company-type.routes";
import { appUserRouter } from "./AppUser/app-user.routes";
import { cardsRouter } from "./Cards/cards.routes";
import { accountsRouter } from "./Accounts/app-user-accounts.routes";

const router = Router()

router.use(correctAdminRouter)
router.use(companyAdminRouter)
router.use(companyDataRouter)
router.use(companyTypeRouter)
router.use(appUserRouter)
router.use(cardsRouter)
router.use(accountsRouter)

export { router }