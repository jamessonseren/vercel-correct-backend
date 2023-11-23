import { Request, Response } from "express";
import { ICompanyAdminRepository } from "../../../repositories/company-admin/company-admin.repository";
import { ICompanyTypeRepository } from "../../../repositories/company-type/company-type.repository";
import { CompanyTypeProps } from "../../../entities/company-type/company-type.entity";
import { CreateCompanyTypeUsecase } from "./create-company-type.usecase";

export class CreateCompanyTypeController{
    constructor(
        private companyAdminRepository: ICompanyAdminRepository,
        private companyTypeRepository: ICompanyTypeRepository

    ){}

    async handle(req: Request, res: Response){
        try{
            const data: CompanyTypeProps = req.body

            const company_admin_id = req.companyAdminId

            const companyTypeUsecase = new CreateCompanyTypeUsecase(
                this.companyAdminRepository,
                this.companyTypeRepository
            )

            const companyType = await companyTypeUsecase.execute({
                ...data,
                company_admin_id
            })

            return res.json(companyType)
        }catch(err: any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}