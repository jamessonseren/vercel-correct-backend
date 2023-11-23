import { Request, Response } from "express";
import { IPasswordCrypto } from "../../../../../crypto/password.crypto";
import { ICompanyAdminToken } from "../../../../../infra/shared/crypto/token/CompanyAdmin/token";
import { ICompanyAdminRepository } from "../../../repositories/company-admin/company-admin.repository";
import { AuthenticateCompanyAdminUsecase } from "./authenticate-company-admin.usecase";

export class AuthenticateCompanyAdminController{
    constructor(
        private companyAdminRepository: ICompanyAdminRepository,
        private passwordCrypto: IPasswordCrypto,
        private token: ICompanyAdminToken
    ){}

    async handle(req: Request, res: Response){
        try{
            const { cnpj, password} = req.body

            const authCompanyAdminUsecase = new AuthenticateCompanyAdminUsecase(
                this.companyAdminRepository,
                this.passwordCrypto,
                this.token
            )

            const companyAdmin = await authCompanyAdminUsecase.execute({ cnpj, password})

            return res.json(companyAdmin)

        }catch(err: any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}