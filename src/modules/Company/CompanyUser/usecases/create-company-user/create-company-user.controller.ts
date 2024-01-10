import { Request, Response } from "express";
import { ICompanyUserRepository } from "../../repositories/company-user.repository";
import { CreateCompanyUserUseCase } from "./create-company-user.usecase";
import { CompanyUserProps } from "../../entities/company-user.entity";
import { logger } from "../../../../../utils/logger";

export class CreateCompanyUserController {
    constructor(
        private companyUserRepository: ICompanyUserRepository

    ){

    }

    async handle(req: Request, res: Response){
        try{
            const data: CompanyUserProps = req.body


            const companyUserUsecase = new CreateCompanyUserUseCase(
                this.companyUserRepository
            )

            const companyUser = await companyUserUsecase.execute(data)

            return res.json(companyUser)
            
        }catch(err: any){
            logger.error(err.stack)
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}