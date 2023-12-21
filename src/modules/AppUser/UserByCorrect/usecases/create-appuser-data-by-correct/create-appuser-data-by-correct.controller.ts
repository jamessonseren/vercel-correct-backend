import { Request, Response } from "express";
import { ICompanyTypeRepository } from "../../../../Company/CompanyType/repositories/company-type.repository";
import { IAppUserRepository } from "../../repositories/app-user-data-repostory";

import { CustomError } from "../../../../../errors/custom.error";
import { CreateAppUserByCorrectUsecase } from "./create-appuser-data-by-correct.usecase";

export class CreateAppUserByCorrectController {
    constructor(
        private companyTypeRepository: ICompanyTypeRepository,
        private appUserRepository: IAppUserRepository

    ){}
    async handle(req: Request, res: Response) {

        try {
            const correct_admin_id = req.correctAdminId

            const company_type_id = req.query.company_type_id as string

            if(!req.file) throw new CustomError("Error upload file", 401)
            
            const { originalname, filename: csvFilePath} = req.file

            const appUserUsecase = new CreateAppUserByCorrectUsecase(
                this.companyTypeRepository,
                this.appUserRepository
            )

            const user = await appUserUsecase.execute(csvFilePath, company_type_id, correct_admin_id)

            return res.json(user)
        } catch (err: any) {
            return res.status(err.statusCode).json({
                error: err.message
            })
        }

    }
}