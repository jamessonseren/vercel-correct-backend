import { Request, Response } from "express";
import { ICompanyUserRepository } from "../../../CompanyUser/repositories/company-user.repository";
import { ICompanyDataRepository } from "../../../CompanyData/repositories/company-data.repository";
<<<<<<< HEAD
import { CompanyDataRequest, CreateCompanyDataUsecase } from "./create-company-data.usecase";
import { ICorrectAdminRepository } from "../../../../CorrectAdmin/repositories/correct-admin.repository";
=======
import { CreateCompanyDataUsecase } from "./create-company-data.usecase";
import { ICorrectAdminRepository } from "../../../../CorrectAdmin/repositories/correct-admin.repository";
import { CompanyDataRequest } from "../../companyDataDto/company-data.dto";

>>>>>>> correct-nodejs-backend/main

export class CreateCompanyDataController {
    constructor(
        private companyDataRepository: ICompanyDataRepository,
<<<<<<< HEAD
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
=======
        private companyUserRepository: ICompanyUserRepository,
        private correctAdminRepository: ICorrectAdminRepository
    ) {

    }
    async handle(req: Request, res: Response) {

        try {
            const data: CompanyDataRequest = req.body

            data.company_user_id = req.companyUserId
            // data.correct_admin_id = req.query.correct_admin_id as string

            const companyDataUsecase = new CreateCompanyDataUsecase(
                this.companyDataRepository,
                this.companyUserRepository,
                this.correctAdminRepository
            )

            const companyData = await companyDataUsecase.execute(data)

            return res.json(companyData)

        } catch (err: any) {
>>>>>>> correct-nodejs-backend/main
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}