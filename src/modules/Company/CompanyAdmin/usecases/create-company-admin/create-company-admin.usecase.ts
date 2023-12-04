import { CustomError } from "../../../../../errors/custom.error"
import { CompanyAdminEntity } from "../../../CompanyAdmin/entities/company-admin.entity"
import { ICompanyAdminRepository } from "../../../CompanyAdmin/repositories/company-admin.repository"

export type CompanyAdminRequest = {
    email: string,
    cnpj: string,
    password: string,
    fullName: string,
    function: string,
    status: boolean
}

export class CreateCompanyAdminUseCase{
  constructor(
    private companyAdminRepository: ICompanyAdminRepository
  ){}
    
    async execute(data: CompanyAdminRequest){
        const admin = await CompanyAdminEntity.create(data)

        //find company admin by CNPJ
        const companyAdminByCNPJ = await this.companyAdminRepository.findByCNPJAuth(data.cnpj)
        if(companyAdminByCNPJ) throw new CustomError("CNPJ already registered", 401)

        //find comapany admin by email
        const companyAdminByEmail = await this.companyAdminRepository.findByEmail(data.email)
        if(companyAdminByEmail) throw new CustomError("Email already registered", 401)

        //create company admin
        const createCompanyAdmin = await this.companyAdminRepository.save(admin)

        return createCompanyAdmin
    }
}