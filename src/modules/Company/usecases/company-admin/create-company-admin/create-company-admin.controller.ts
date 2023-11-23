import { Request, Response } from "express";
import { ICompanyAdminRepository } from "../../../repositories/company-admin/company-admin.repository";
import { CreateCompanyAdminUseCase } from "./create-company-admin.usecase";

export class CreateCompanyAdminController {
    constructor(
        private companyAdminRepository: ICompanyAdminRepository

    ){

    }

    async handle(req: Request, res: Response){
        try{
            const data = req.body

            const companyAdminUsecase = new CreateCompanyAdminUseCase(
                this.companyAdminRepository
            )

            const companyAdmin = await companyAdminUsecase.execute(data)

            return res.json(companyAdmin)
            
        }catch(err: any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}