import { randomUUID } from 'crypto'
import { CustomError } from '../../../../errors/custom.error'
import { PasswordBcrypt } from '../../../../crypto/password.bcrypt'
<<<<<<< HEAD

export type CompanyUserProps = {
    email: string,
    cnpj: string,
    user_name: string,
    permissions: string[],
=======
import { UserRoles } from '@prisma/client'
import { Permissions } from '@prisma/client'

export type CompanyUserProps = {
    email: string | null,
    cnpj: string,
    cpf: string | null,
    user_name: string,
    user_code: string,
    roles: UserRoles[],
    permissions: Permissions[],
>>>>>>> correct-nodejs-backend/main
    client_admin: boolean,
    password: string,
    fullName: string | null,
    function: string | null
}

export class CompanyUserEntity{
    id: string
    email: string | null
    cnpj: string
<<<<<<< HEAD
    permissions: string[]
    user_name: string
=======
    cpf: string | null
    roles: UserRoles[]
    permissions: Permissions[]
    user_name: string
    user_code: string
>>>>>>> correct-nodejs-backend/main
    client_admin: boolean
    password: string
    fullName: string | null
    function: string | null

    private constructor(props: CompanyUserProps){
        this.id = randomUUID()
        this.email = props.email
        this.cnpj = props.cnpj
<<<<<<< HEAD
        this.permissions = props.permissions
=======
        this.cpf = props.cpf
        this.roles = props.roles
        this.permissions = props.permissions
        this.user_code = props.user_code
>>>>>>> correct-nodejs-backend/main
        this.user_name = props.user_name
        this.password = props.password
        this.fullName = props.fullName
        this.function = props.function
        this.client_admin = props.client_admin
    }

    static async create(data: CompanyUserProps){
<<<<<<< HEAD
        if(!data.email) throw new CustomError("Email is required", 400)
        if(!data.cnpj) throw new CustomError("CNPJ is required", 400)
        if(!data.password) throw new CustomError("Password is required", 400)
        if(!data.fullName) throw new CustomError("Name is required", 400)
        if(!data.function) throw new CustomError("Function is required", 400)
        if(!data.user_name) throw new CustomError("Username is required", 400)
=======
        if(!data.cnpj) throw new CustomError("CNPJ is required", 403)
        if(!data.password) throw new CustomError("Password is required", 403)
        if(!data.user_name) throw new CustomError("Username is required", 403)
        
>>>>>>> correct-nodejs-backend/main

        const bcrypt = new PasswordBcrypt()
        const passwordHash = await bcrypt.hash(data.password)

        data.password = passwordHash

        const companyUser = new CompanyUserEntity(data)
        return companyUser

    }
}


