import { Request, Response } from "express";
import { IAppUserAuthRepository } from "../../../../modules/AppUser/repositories/AppUserAuth/app-use-auth-repository";
import { EnsureValidAppUserUsecase } from "./ensure-valid-app-user.usecase.middleware";

export class EnsureValidAppUserController{
    constructor(
        private appUserAutRepository: IAppUserAuthRepository
    ){}

    async handle(req: Request, res: Response){
        try{
            const appUserId = req.appUserId

            const validAdminUsecase = new EnsureValidAppUserUsecase(
                this.appUserAutRepository
            )

            const appUser = await validAdminUsecase.execute(appUserId)

            return appUser

        }catch(err:any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}