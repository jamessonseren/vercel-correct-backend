import { Router } from "express";
import { correctAdminRouter } from "./CorrectAdmin/correct-admin.routes";
import { companyUserRouter } from "./CompanyUser/company-user.routes";
import { companyDataRouter } from "./CompanyData/company-data.routes";
import { companyTypeRouter } from "./CompanyType/company-type.routes";
import { appUserRouter } from "./AppUser/app-user.routes";
import { cardsRouter } from "./Cards/cards.routes";
import { accountsRouter } from "./Accounts/app-user-accounts.routes";
import { productsRouter } from "./Ecommerce/Products/products.routes";
<<<<<<< HEAD
=======
import { companyAddressRouter } from "./CompanyAddress/company-address.routes";
>>>>>>> correct-nodejs-backend/main

const router = Router()

router.use(correctAdminRouter)
router.use(companyUserRouter)
router.use(companyDataRouter)
router.use(companyTypeRouter)
router.use(appUserRouter)
router.use(cardsRouter)
router.use(accountsRouter)
router.use(productsRouter)
<<<<<<< HEAD
=======
router.use(companyAddressRouter)
>>>>>>> correct-nodejs-backend/main

export { router }