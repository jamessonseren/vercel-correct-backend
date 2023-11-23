import { Request, Response } from "express";
import { ICompanyAdminRepository } from "../../../repositories/company-admin/company-admin.repository";
import { ICompanyDataRepository } from "../../../repositories/company_data/company-data.repository";
import { CompanyDataRequest, CreateCompanyDataUsecase } from "./create-company-data.usecase";
import { CompanyDataPrismaRepository } from "../../../repositories/company_data/implementations/prisma/company-data-prisma.repository";
import { CompanyDataEntity } from "../../../entities/company-data/company-data.entity";

export class CreateCompanyDataController {
    constructor(
        private companyDataRepository: ICompanyDataRepository,
        private companyAdminRepository: ICompanyAdminRepository
    ){

    }
    async handle(req: Request, res: Response){
        
        try{
            const data: CompanyDataRequest = req.body

            const company_admin_id = req.companyAdminId
            const correct_admin_id = req.query.correct_admin_id as string

            const companyDataUsecase = new CreateCompanyDataUsecase(
                this.companyDataRepository,
                this.companyAdminRepository
            )

            const companyData = await companyDataUsecase.execute({...data, company_admin_id, correct_admin_id})
            
            return res.json(companyData)

        }catch(err: any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}