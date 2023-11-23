import { Router } from "express";
import { createCorrectAdminController } from "../../modules/CorrectAdmin/useCases";
import { authAdminController } from "../../modules/CorrectAdmin/useCases/authenticate-admin";
import { correctIsAuth } from "../../infra/shared/middlewares/CorrectAdmin/correct-admin-auth.middleware";
import uploadConfig from '../../infra/shared/multer/multer.config'
import multer from 'multer'
import { createAppUserByCorrectController } from "../../modules/AppUser/usecases/create-by-correct";

const upload = multer(uploadConfig.upload("./tmp"))
const correctAdminRouter = Router()

correctAdminRouter.post('/admin', async (request, response) => {
    await createCorrectAdminController.handle(request, response)
} )

correctAdminRouter.post('/login', async (request, response) => {
    await authAdminController.handle(request, response)
})

correctAdminRouter.post("/app-users", correctIsAuth, upload.single('file'), async (request, response) => {
    await createAppUserByCorrectController.handle(request, response)
})

export { correctAdminRouter }