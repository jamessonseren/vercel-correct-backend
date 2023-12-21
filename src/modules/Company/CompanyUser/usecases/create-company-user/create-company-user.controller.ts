import { Request, Response } from "express";
import { ICompanyUserRepository } from "../../repositories/company-user.repository";
import { CreateCompanyUserUseCase } from "./create-company-user.usecase";
import { CompanyUserProps } from "../../entities/company-user.entity";
export class CreateCompanyUserController {
    constructor(
        private companyAdminRepository: ICompanyUserRepository

    ){

    }

    async handle(req: Request, res: Response){
        try{
            const data: CompanyUserProps = req.body

            const companyAdminUsecase = new CreateCompanyUserUseCase(
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