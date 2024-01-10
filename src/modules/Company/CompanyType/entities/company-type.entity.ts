import { CompanyTypeOptions } from "@prisma/client"
import { randomUUID } from 'crypto'
import { CustomError } from "../../../../errors/custom.error"

export type CompanyTypeProps = {
    type: CompanyTypeOptions
    cnpj: string
    company_user_id: string
}
export class CompanyTypeEntity {
    id: string
    type: CompanyTypeOptions
    cnpj: string
    company_user_id: string

    private constructor(props: CompanyTypeProps) {

        this.id = randomUUID()
        this.type = props.type
        this.cnpj = props.cnpj
        this.company_user_id = props.company_user_id
     }

    static async create(data: CompanyTypeProps) {
        if(!data.type) throw new CustomError("Company type must be specified!", 401)
        if(!data.cnpj) throw new CustomError("CNPJ must be informed", 401)
        if(!data.company_user_id) throw new CustomError("User must be signed in", 401)

        if(!(Object.values(CompanyTypeOptions).includes(data.type))) throw new CustomError("Company type is not valid!", 401)
        if(typeof data.cnpj !== 'string') throw new CustomError("CNPJ must be string stype", 401)
        if(typeof data.company_user_id !== 'string') throw new CustomError("Company user must be string type", 401)


        const companyType = new CompanyTypeEntity(data)
        return companyType
    }
}