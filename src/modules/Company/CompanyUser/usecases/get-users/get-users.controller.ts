import { Request, Response } from "express";
import { ICompanyUserRepository } from "../../repositories/company-user.repository";
import { logger } from "../../../../../utils/logger";
import { GetUsersUsecase } from "./get-users.usecase";

export class GetUsersController{
    constructor(
        private companyUserRepository: ICompanyUserRepository
    ) {}

    async handle(req: Request, res: Response){
        try{

            const user_code = req.query.user_code as string

            const getUsersUsecase = new GetUsersUsecase(this.companyUserRepository)

            const users = await getUsersUsecase.execute(user_code)
            
            return res.json(users)

        }catch(err: any){
            logger.error(err.stack)
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}