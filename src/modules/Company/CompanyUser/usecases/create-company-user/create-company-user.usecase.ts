import { CustomError } from "../../../../../errors/custom.error"
import { CompanyUserEntity, CompanyUserProps } from "../../entities/company-user.entity"
import { ICompanyUserRepository } from "../../repositories/company-user.repository"


export class CreateCompanyUserUseCase{
  constructor(
    private companyUserRepository: ICompanyUserRepository
  ){}
    
    async execute(data: CompanyUserProps){
        const user = await CompanyUserEntity.create(data)

        //find company admin by CNPJ
        const companyAdminByCNPJ = await this.companyUserRepository.findByCNPJAuth(data.cnpj)
        if(companyAdminByCNPJ) throw new CustomError("CNPJ already registered", 401)

        //find company admin by email
        const companyAdminByEmail = await this.companyUserRepository.findByEmail(data.email)
        if(companyAdminByEmail) throw new CustomError("Email already registered", 401)
        
        const findAdminByUserName = await this.companyUserRepository.findByUserName(data.user_name)
        if(findAdminByUserName) throw new CustomError("Username already registered", 401)
        
        //create company admin
        const createCompanyAdmin = await this.companyUserRepository.save(user)

        return createCompanyAdmin
    }
}