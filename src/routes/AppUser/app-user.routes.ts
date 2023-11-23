import { Router } from "express";
import { createAppUserByUserController } from "../../modules/AppUser/usecases/create-by-user";
import { createAppUserByCorrectController } from "../../modules/AppUser/usecases/create-by-correct";
import uploadConfig from '../../infra/shared/multer/multer.config'
import multer from 'multer'
import { correctIsAuth } from "../../infra/shared/middlewares/CorrectAdmin/correct-admin-auth.middleware";

const upload = multer(uploadConfig.upload("./tmp"))

const appUserRouter = Router()


//Create Appuser by User
appUserRouter.post('/new-app-user', async (request, response) => {
    await createAppUserByUserController.handle(request, response)
})

//create AppUser By correct Admin
appUserRouter.post("/app-users", correctIsAuth, upload.single('file'), async (request, response) => {
    await createAppUserByCorrectController.handle(request, response)
})

export { appUserRouter }