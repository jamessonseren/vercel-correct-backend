import { Response, Request } from "express";
import { ICompanyAddressRepository } from "../../repositories/company-address.repository";
import { GetCompanyAddressUsecase } from "./get-company-address.usecase";
import { ICompanyDataRepository } from "../../../CompanyData/repositories/company-data.repository";

export class GetCompanyAddressController{
    constructor(
        private companyAddressRepository: ICompanyAddressRepository
    ){}

    async handle(req: Request, res: Response){
        try{
            const cnpj = req.query.cnpj as string

            const companyAddressUsecase = new GetCompanyAddressUsecase(
                this.companyAddressRepository
            )

            const companyAddress = await companyAddressUsecase.execute(cnpj)

            return res.json(companyAddress)
        }catch(err:any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}