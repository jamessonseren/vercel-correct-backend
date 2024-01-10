import { Request, Response } from "express";
import { ICompanyTypeRepository } from "../../repositories/company-type.repository";
import { UpdateCompanyTypeByCorrectUsecase } from "./update-company-type-by-correct.usecase";

export class UpdateCompanyTypeByCorrectController{
    constructor(
        private companyTypeRepository: ICompanyTypeRepository
    ){}

    async handle(req: Request, res: Response){

        try{
            const {cnpj, type} = req.body

           const updateCompanyType = new UpdateCompanyTypeByCorrectUsecase(
            this.companyTypeRepository
           )

           const companyType = await updateCompanyType.execute(cnpj, type)
        
            return res.json(companyType)
            
        }catch(err: any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}