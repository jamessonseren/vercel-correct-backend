// import { Request, Response } from "express";
// import { ICompanySecondaryUserRepository } from "../../repositories/company-secondary-user.repository";
// import { IPasswordCrypto } from "../../../../../crypto/password.crypto";
// import { IcompanyUserToken } from "../../../../../infra/shared/crypto/token/CompanySecondaryUser/token";
// import { AuthenticateCompanySecondaryUserUsecase, AuthenticateCompanyUserRequest } from "./authenticate-company-secondary-user.usecase";

// export class AuthenticateCompanySecondaryUserController{

//     constructor(
//         private companySecondaryUserRepository: ICompanySecondaryUserRepository,
//         private passwordCrypto: IPasswordCrypto,
//         private token: IcompanyUserToken
//     ){}
//     async handle(req: Request, res: Response){

//         try{
//             const data: AuthenticateCompanyUserRequest = req.body

//             const authCompanyUserUsecase = new AuthenticateCompanySecondaryUserUsecase(
//                 this.companySecondaryUserRepository,
//                 this.passwordCrypto,
//                 this.token
//             )

//             const companyUser = await authCompanyUserUsecase.execute(data)

//             return res.json(companyUser)

//         }catch(err: any){
//             return res.status(err.statusCode).json({
//                 error: err.message
//             })
//         }
        
//     }
// }