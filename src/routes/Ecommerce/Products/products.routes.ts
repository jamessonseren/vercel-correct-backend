import { Router } from "express";
import { companyIsAuth } from "../../../infra/shared/middlewares/CompanyAdmin/company-admin-auth.middlware";
import { createProductsController } from "../../../modules/Ecommerce/Products/usecases/create-products";
import uploadConfig from '../../../infra/shared/multer/multer.config'

import multer from 'multer'

const upload = multer(uploadConfig.upload("./tmp"))
const productsRouter = Router()

productsRouter.post('/create-product', companyIsAuth, upload.single('file'), async (request, response) => {
    await createProductsController.handle(request, response)
})

export { productsRouter }