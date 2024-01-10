import { Response, Request } from "express";
import { ICompanyTypeRepository } from "../../repositories/company-type.repository";
import { GetCompanyTypeUsecase } from "./get-company-type.usecase";


export class GetCompanyTypeController{
constructor(
    private companyTypeRepository: ICompanyTypeRepository
){}
    async handle(req: Request, res: Response){
        try{

            const cnpj = req.query.cnpj as string

            const companyTypeUsecase = new GetCompanyTypeUsecase(
                this.companyTypeRepository
            )

            const companyType = await companyTypeUsecase.execute(cnpj)

            return res.json(companyType)
            
        }catch(err: any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}
