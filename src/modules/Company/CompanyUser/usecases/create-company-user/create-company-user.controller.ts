import { Request, Response } from "express";
import { ICompanyUserRepository } from "../../repositories/company-user.repository";
import { CreateCompanyUserUseCase } from "./create-company-user.usecase";
import { CompanyUserProps } from "../../entities/company-user.entity";
<<<<<<< HEAD
export class CreateCompanyUserController {
    constructor(
        private companyAdminRepository: ICompanyUserRepository
=======
import { logger } from "../../../../../utils/logger";

export class CreateCompanyUserController {
    constructor(
        private companyUserRepository: ICompanyUserRepository
>>>>>>> correct-nodejs-backend/main

    ){

    }

    async handle(req: Request, res: Response){
        try{
            const data: CompanyUserProps = req.body

<<<<<<< HEAD
            const companyAdminUsecase = new CreateCompanyUserUseCase(
                this.companyAdminRepository
            )

            const companyAdmin = await companyAdminUsecase.execute(data)

            return res.json(companyAdmin)
            
        }catch(err: any){
=======

            const companyUserUsecase = new CreateCompanyUserUseCase(
                this.companyUserRepository
            )

            const companyUser = await companyUserUsecase.execute(data)

            return res.json(companyUser)
            
        }catch(err: any){
            logger.error(err.stack)
>>>>>>> correct-nodejs-backend/main
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}