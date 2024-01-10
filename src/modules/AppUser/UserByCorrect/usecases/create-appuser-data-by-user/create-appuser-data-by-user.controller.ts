import { Request, Response } from "express";
import { IAppUserAuthRepository } from "../../../AppUserManagement/repositories/app-use-auth-repository";
import { IAppUserRepository } from "../../repositories/app-user-data-repostory";
<<<<<<< HEAD
import { CreateAppUserDataByUserUsecase } from "./create-appuser-data-by-user.usecase";
=======
import { CreateAppUserDataByUserUsecase } from "../../../../Cards/create-appuser-data-by-user.usecase";
>>>>>>> correct-nodejs-backend/main
import { AppUserProps } from "../../entities/appuser-data.entity";
import { CustomError } from "../../../../../errors/custom.error";


export class CreateAppUserDataByUserController {
    constructor(
        private appUserRepository: IAppUserRepository,
        private appUserAuthRepository: IAppUserAuthRepository
    ) { }

    async handle(req: Request, res: Response) {
        try {
            const data:AppUserProps = req.body
            const appUserId = req.appUserId

            data.correct_admin_id = req.query.correctAdminId as string
            

            const appUserDataUsecase = new CreateAppUserDataByUserUsecase(
                this.appUserRepository,
                this.appUserAuthRepository
            )

            const result = await appUserDataUsecase.execute(data, appUserId)

            return res.json(result)

        } catch (err: any) {
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}