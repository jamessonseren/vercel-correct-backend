import { ICompanyAdminRepository } from "../../../../modules/Company/CompanyAdmin/repositories/company-admin.repository";
import { Request, Response } from "express";
import { EnsureValidCompanyAdminUsecase } from "./ensure-valid-company-admin.usecase.middlware";

export class EnsureValidCompanyAdminController{
    constructor(
        private companyAdminRepository: ICompanyAdminRepository

    ){
    }
    async handle(req: Request, res: Response){
        try{
            const companyAdminId = req.companyAdminId
            const validAdminUsecase = new EnsureValidCompanyAdminUsecase(this.companyAdminRepository)

            const admin = await validAdminUsecase.execute(companyAdminId)

            return admin
        }catch(err: any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }

}