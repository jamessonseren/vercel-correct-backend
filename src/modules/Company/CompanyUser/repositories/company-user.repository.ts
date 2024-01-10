<<<<<<< HEAD
import { CompanyUserEntity } from "../entities/company-user.entity"
import { CompanyUserResponse } from "../companyUserDto/company-user.dto"

export interface ICompanyUserRepository{
    findByCNPJAuth(cnpj: string): Promise<CompanyUserEntity | null>
    findByCNPJ(cnpj: string): Promise<CompanyUserResponse | null>
    findById(id: string): Promise<CompanyUserResponse | null>
    findByEmail(email: string): Promise<CompanyUserResponse | null>
    findByUserName(user_name: string): Promise<CompanyUserResponse | null>
    save(data: CompanyUserEntity): Promise<CompanyUserResponse>
=======
import { CompanyUserEntity, CompanyUserProps } from "../entities/company-user.entity"
import { CompanyUserResponse } from "../companyUserDto/company-user.dto"
import { UserRoles } from "@prisma/client"

export interface ICompanyUserRepository{
    findByUserNameAndCNPJAuth(user_name: string, cnpj: string): Promise<CompanyUserEntity | null>
    // findByCNPJAuth(cnpj: string): Promise<CompanyUserEntity | null>
    // findByCNPJ(cnpj: string): Promise<CompanyUserResponse | null>
    // findByCPFAuth(cpf: string): Promise<CompanyUserEntity | null>
    findById(id: string): Promise<CompanyUserResponse | null>
    findByCnpjAndAdminRole(cnpj: string): Promise<CompanyUserResponse | null>
    findByEmail(email: string): Promise<CompanyUserResponse | null>
    findByUserCode(user_code: string): Promise<CompanyUserResponse[] | null>
    updateUser(data: CompanyUserProps): Promise<CompanyUserResponse>
    saveUser(data: CompanyUserEntity): Promise<CompanyUserResponse>
    saveOrUpdate(data: CompanyUserEntity): Promise<CompanyUserEntity>
    deleteByAdminById(user_id: string): Promise<void>
>>>>>>> correct-nodejs-backend/main
}