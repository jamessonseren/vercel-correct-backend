import { Request, Response } from "express";
import { ICompanyUserRepository } from "../../../CompanyUser/repositories/company-user.repository";
import { ICompanyDataRepository } from "../../../CompanyData/repositories/company-data.repository";
import { CompanyDataRequest, CreateCompanyDataUsecase } from "./create-company-data.usecase";
import { ICorrectAdminRepository } from "../../../../CorrectAdmin/repositories/correct-admin.repository";

export class CreateCompanyDataController {
    constructor(
        private companyDataRepository: ICompanyDataRepository,
        private companyUserRepository: ICompanyUserRepository
    ){

    }
    async handle(req: Request, res: Response){
        
        try{
            const data: CompanyDataRequest = req.body

            const company_user_id = req.companyUserId
            const correct_admin_id = req.query.correct_admin_id as string

            const companyDataUsecase = new CreateCompanyDataUsecase(
                this.companyDataRepository,
                this.companyUserRepository
            )

            const companyData = await companyDataUsecase.execute({...data, company_user_id, correct_admin_id})
            
            return res.json(companyData)

        }catch(err: any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}