import { Request, Response } from "express";
import { ICompanyUserRepository } from "../../../CompanyUser/repositories/company-user.repository";
import { CompanyTypeProps } from "../../entities/company-type.entity";
import { ICompanyTypeRepository } from "../../repositories/company-type.repository";
import { CreateCompanyTypeUsecase } from "./create-company-type.usecase";

export class CreateCompanyTypeController{
    constructor(
        private companyUserRepository: ICompanyUserRepository,
        private companyTypeRepository: ICompanyTypeRepository

    ){}

    async handle(req: Request, res: Response){
        try{
            const data: CompanyTypeProps = req.body

            const company_user_id = req.companyUserId

            const companyTypeUsecase = new CreateCompanyTypeUsecase(
                this.companyUserRepository,
                this.companyTypeRepository
            )

            const companyType = await companyTypeUsecase.execute({
                ...data,
                company_user_id
            })

            return res.json(companyType)
        }catch(err: any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}