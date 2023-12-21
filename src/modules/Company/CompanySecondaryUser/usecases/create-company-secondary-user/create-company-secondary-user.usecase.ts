// import { CustomError } from "../../../../../errors/custom.error";
// import { ICompanyAdminRepository } from "../../../CompanyAdmin/repositories/company-admin.repository";
// import { CompanySecondaryUserEntity, ICompanySecondaryUserProps } from "../../entities/company-secondary-user.entity";
// import { ICompanySecondaryUserRepository } from "../../repositories/company-secondary-user.repository";

// export class CreateCompanySecondaryUserUsecase {
//     constructor(
//         private companyAdminRepository: ICompanyAdminRepository,
//         private companyUserRepository: ICompanySecondaryUserRepository
//     ){}

//     async execute(data: ICompanySecondaryUserProps){

       
//         //find company admin to get company CNPJ
//         const findCompanyAdminById = await this.companyAdminRepository.findById(data.company_admin_id)
//         if(!findCompanyAdminById) throw new CustomError("Admin not found", 400)

//         data.cnpj = findCompanyAdminById.cnpj

//         //check if user already exists
//         const findUser = await this.companyUserRepository.findByUsernameAuth(data.user_name)
//         if(!findUser || findUser.cnpj === data.cnpj){

//             const user = await CompanySecondaryUserEntity.create(data)
    
//             const createUser = await this.companyUserRepository.saveOrUpdate(user)
    
//             return createUser
//         }
//         if(findUser && findUser.cnpj !== data.cnpj) throw new CustomError("User name is not available", 409)

        
//     }
// }