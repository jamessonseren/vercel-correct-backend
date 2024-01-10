import { randomUUID } from 'crypto'
import { CustomError } from '../../../../errors/custom.error'
import { PasswordBcrypt } from '../../../../crypto/password.bcrypt'
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
    client_admin: boolean,
    password: string,
    fullName: string | null,
    function: string | null
}

export class CompanyUserEntity{
    id: string
    email: string | null
    cnpj: string
    cpf: string | null
    roles: UserRoles[]
    permissions: Permissions[]
    user_name: string
    user_code: string
    client_admin: boolean
    password: string
    fullName: string | null
    function: string | null

    private constructor(props: CompanyUserProps){
        this.id = randomUUID()
        this.email = props.email
        this.cnpj = props.cnpj
        this.cpf = props.cpf
        this.roles = props.roles
        this.permissions = props.permissions
        this.user_code = props.user_code
        this.user_name = props.user_name
        this.password = props.password
        this.fullName = props.fullName
        this.function = props.function
        this.client_admin = props.client_admin
    }

    static async create(data: CompanyUserProps){
        if(!data.cnpj) throw new CustomError("CNPJ is required", 403)
        if(!data.password) throw new CustomError("Password is required", 403)
        if(!data.user_name) throw new CustomError("Username is required", 403)
        

        const bcrypt = new PasswordBcrypt()
        const passwordHash = await bcrypt.hash(data.password)

        data.password = passwordHash

        const companyUser = new CompanyUserEntity(data)
        return companyUser

    }
}


