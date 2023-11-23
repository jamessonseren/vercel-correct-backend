import { randomUUID } from 'crypto'
import { CustomError } from '../../../../errors/custom.error'
import { PasswordBcrypt } from '../../../../crypto/password.bcrypt'

type ICompanyAdmin = {
    email: string,
    cnpj: string,
    status: boolean,
    password: string,
    fullName: string,
    function: string
}

export class CompanyAdminEntity{
    id: string
    email: string
    cnpj: string
    status: boolean
    password: string
    fullName: string
    function: string

    private constructor(props: ICompanyAdmin){
        this.id = randomUUID()
        this.email = props.email
        this.cnpj = props.cnpj
        this.password = props.password
        this.fullName = props.fullName
        this.function = props.function
        this.status = props.status
    }

    static async create(data: ICompanyAdmin){
        if(!data.email) throw new CustomError("Email is required", 412)
        if(!data.cnpj) throw new CustomError("CNPJ is required", 412)
        if(!data.password) throw new CustomError("Password is required", 412)
        if(!data.fullName) throw new CustomError("Name is required", 412)
        if(!data.function) throw new CustomError("Function is required", 412)

        const bcrypt = new PasswordBcrypt()
        const passwordHash = await bcrypt.hash(data.password)

        data.password = passwordHash

        const companyAdmin = new CompanyAdminEntity(data)
        return companyAdmin

    }
}


