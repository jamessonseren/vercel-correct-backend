import { Request, Response } from "express";
import { CreateAppUserByUserUsecase } from "./create-appuser-by-user.usecase";
import { IAuthAppUserProps } from "../../entities/create-user-by-user/appuser-by-user.entity";
import { IAppUserAuthRepository } from "../../repositories/app-use-auth-repository";
import { IAppUserRepository } from "../../../UserByCorrect/repositories/app-user-data-repostory";

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
        console.log({data})

        return res.json(user)
        }catch(err: any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}