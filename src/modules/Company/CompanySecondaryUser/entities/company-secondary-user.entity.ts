import {randomUUID} from 'crypto'
import { CustomError } from '../../../../errors/custom.error'
import { PasswordBCrypt } from '../../../../infra/shared/crypto/password.bcrypt'
import { UserType } from '@prisma/client'

export type ICompanySecondaryUserProps = {
    cnpj: string
    user_type: UserType
    user_name: string
    password: string
    company_admin_id: string
}

export class CompanySecondaryUserEntity{
    id: string
    user_type: UserType
    cnpj: string
    user_name: string
    password: string
    company_admin_id: string

    private constructor(props: ICompanySecondaryUserProps){
        this.id = randomUUID()
        this.user_type = props.user_type
        this.cnpj = props.cnpj
        this.user_name = props.user_name
        this.password = props.password
        this.company_admin_id = props.company_admin_id

        if(!this.user_type) throw new CustomError("User type is required", 401)
        if(!props.cnpj) throw new CustomError("CNPJ is required", 401)
        if(!props.user_name) throw new CustomError("Username is required", 401)
        if(!props.password) throw new CustomError("Password is required", 401)
    }

    static async create(data: ICompanySecondaryUserProps){

        const bcrypt = new PasswordBCrypt()
        const passwordHash = await bcrypt.hash(data.password)

        data.password = passwordHash

        const companyUser = new CompanySecondaryUserEntity(data)
        return companyUser
    }
}