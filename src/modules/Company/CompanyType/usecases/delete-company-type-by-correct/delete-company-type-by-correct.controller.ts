import { Request, Response } from "express";
import { ICompanyTypeRepository } from "../../repositories/company-type.repository";
import { DeleteCompanyTypeByCorrectUsecase } from "./delete-company-type-by-correct.usecase";

export class DeleteCompanyTypeByCorrectController{
    constructor(
        private companyTypeRepository: ICompanyTypeRepository
    ){}

    async handle(req: Request, res: Response){

        try{
            const {cnpj, type} = req.body

           const deleteCompanyType = new DeleteCompanyTypeByCorrectUsecase(
            this.companyTypeRepository
           )

           await deleteCompanyType.execute(cnpj)
        
            return res.json({message: "Company Type deleted successfully"})
            
        }catch(err: any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}