import { Router } from "express";
import { createCorrectAdminController } from "../modules/CorrectAdmin/useCases";

const correctAdminRouter = Router()

correctAdminRouter.post('/admin', async (request, response) => {
    await createCorrectAdminController.handle(request, response)
} )

export { correctAdminRouter }