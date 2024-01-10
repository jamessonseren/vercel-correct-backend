import { UserRoles } from "@prisma/client"
import { CustomError } from "../../../../../errors/custom.error"
import { CompanyUserEntity, CompanyUserProps } from "../../entities/company-user.entity"
import { ICompanyUserRepository } from "../../repositories/company-user.repository"


export class CreateCompanyUserUseCase {
  constructor(
    private companyUserRepository: ICompanyUserRepository
  ) { }

  async execute(data: CompanyUserProps) {


    //find company User by email
    if (data.email) {

      //if email exists, it means that it's an admin being created
      const admin = await CompanyUserEntity.create(data)

      if(!admin.fullName) throw new CustomError("Full name is required", 400)
      if(!admin.function) throw new CustomError("Admin position is required", 400)

      //check if email already exists
      const companyUserByEmail = await this.companyUserRepository.findByEmail(data.email)
      if (companyUserByEmail) throw new CustomError("Email already registered", 400)

      //check if username already exists
      const findUserByUserName = await this.companyUserRepository.findByUserNameAndCNPJAuth(data.user_name, data.cnpj)
      if (findUserByUserName) throw new CustomError("Username already registered", 400)


      //create company admin
      const createCompanyAdmin = await this.companyUserRepository.saveUser(admin)

      return createCompanyAdmin

    }


    //if email is empty, it means that it's a secondary user being created - So user code must be the same from Admin's
    const user = await CompanyUserEntity.create(data)

    //get company Admin with cnpj and admin role
    const findCompanyAdmin = await this.companyUserRepository.findByCnpjAndAdminRole(data.cnpj)
    if (!findCompanyAdmin) throw new CustomError("Unable to find company Admin", 400)

    if(!findCompanyAdmin.cpf) throw new CustomError("Admin must register CPF", 400)

    //check if username already exists among Admin users
    const findUser = await this.companyUserRepository.findByUserNameAndCNPJAuth(data.user_name, data.cnpj)
    if(findUser) throw new CustomError("User already exists", 409)
    
    //check if admin is a client
    if(!findCompanyAdmin.client_admin) throw new CustomError("User must have a contract first", 400)

    //if company is found, define same user code to secondary user
    user.user_code = findCompanyAdmin.user_code
    user.client_admin = findCompanyAdmin.client_admin
    user.roles = ["user"]

    //create user
    const createCompanyUser = await this.companyUserRepository.saveUser(user)

    return createCompanyUser






  }
}

