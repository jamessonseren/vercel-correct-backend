// import { Request, Response } from "express";
// import { ICompanyAdminRepository } from "../../../CompanyAdmin/repositories/company-admin.repository";
// import { ICompanySecondaryUserRepository } from "../../repositories/company-secondary-user.repository";
// import { ICompanySecondaryUserProps } from "../../entities/company-secondary-user.entity";
// import { CreateCompanySecondaryUserUsecase } from "./create-company-secondary-user.usecase";

// export class CreateCompanySecondaryUserController{

//     constructor(
//         private companyAdminRepository: ICompanyAdminRepository,
//         private companyUserRepository: ICompanySecondaryUserRepository
//     ){}


//     async handle(req: Request, res: Response){
//         try{

//             const data:ICompanySecondaryUserProps = req.body

//             data.company_admin_id = req.companyAdminId

//             const companyUserUsecase = new CreateCompanySecondaryUserUsecase(
//                 this.companyAdminRepository,
//                 this.companyUserRepository
//             )

//             const user = await companyUserUsecase.execute(data)

//             return res.json(user)
            
//         }catch(err: any){
//             return res.status(err.statusCode).json({
//                 error: err.message
//             })
//         }
//     }
// }