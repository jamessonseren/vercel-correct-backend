import { Request, Response } from "express";
import { IAppUserAuthRepository } from "../../repositories/AppUserAuth/app-use-auth-repository";
import { IAppUserRepository } from "../../repositories/AppUserData/app-user-data-repostory";
import { CreateAppUserByUserUsecase } from "./create-appuser-by-user.usecase";
import { IAuthAppUserProps } from "../../entities/appuser-by-user.entity";

export class CreateAppUserByUserController{
    constructor(
        private appUserAuthRepository: IAppUserAuthRepository,
        private appUserDataRepository: IAppUserRepository

    ){}

    async handle(req: Request, res: Response){
        try{
        const data: IAuthAppUserProps = req.body

        const appUserAuthUsecase = new CreateAppUserByUserUsecase(
            this.appUserAuthRepository,
            this.appUserDataRepository
        )

        const user = await appUserAuthUsecase.execute(data)

        return res.json(user)
        }catch(err: any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}