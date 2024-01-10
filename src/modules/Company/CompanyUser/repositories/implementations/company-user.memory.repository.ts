import { CompanyUserEntity } from "../../entities/company-user.entity";
import { ICompanyUserRepository } from "../company-user.repository";
import { CompanyUserResponse } from "../../companyUserDto/company-user.dto";
import { $Enums } from "@prisma/client";

export class CompanyUserMemoryRepository implements ICompanyUserRepository{
    
    
    
    
    user: CompanyUserEntity[] = []

    async findByCNPJAuth(cnpj: string): Promise<CompanyUserEntity | null> {
        return this.user.find(user => user.cnpj === cnpj) || null
    }
    async findByCNPJ(cnpj: string): Promise<CompanyUserResponse | null> {
        return this.user.find(user => user.cnpj === cnpj) || null 
    }

    async findByCPFAuth(cpf: string): Promise<CompanyUserEntity | null> {
        return this.user.find(user => user.cpf === cpf) || null 
    }
    
    async findById(id: string): Promise<CompanyUserResponse | null> {
        return this.user.find(user => user.id === id) || null
  
    }

    async findByEmail(email: string): Promise<CompanyUserResponse | null> {
        return this.user.find(user => user.email === email) || null
    }

     async findByUserNameAndCnpj(user_name: string, cnpj: string): Promise<CompanyUserResponse | null> {
        return this.user.find( user => user.user_name === user_name && user.cnpj === cnpj) || null
    }

    async save(data: CompanyUserEntity): Promise<CompanyUserResponse> {
        this.user.push(data)
        return {
            id: data.id,
            fullName: data.fullName,
            user_name: data.user_name,
            roles: data.roles,
            user_code: data.user_code,
            permissions: data.permissions,
            client_admin: data.client_admin,
            email: data.email,
            cnpj: data.cnpj,
            cpf: data.cpf,
            function: data.function
        }

    }

    async findByUserCode(user_code: string): Promise<CompanyUserResponse[] | null> {
        const foundUser = this.user.find(user => user.user_code === user_code);
        return foundUser ? [foundUser] : null;
    }
    saveOrUpdate(data: CompanyUserEntity): Promise<CompanyUserEntity> {
        throw new Error("Method not implemented.");
    }

    async findByUserName(user_name: string): Promise<CompanyUserEntity | null> {
        return this.user.find( user => user.user_name === user_name) || null
        
    }

}