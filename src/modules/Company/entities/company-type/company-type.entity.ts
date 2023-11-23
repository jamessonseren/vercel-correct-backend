import { CompanyTypeOptions } from "@prisma/client"
import { randomUUID } from 'crypto'
import { CustomError } from "../../../../errors/custom.error"

export type CompanyTypeProps = {
    type: CompanyTypeOptions
    cnpj: string
    company_admin_id: string
}
export class CompanyTypeEntity {
    id: string
    type: CompanyTypeOptions
    cnpj: string
    company_admin_id: string

    private constructor(props: CompanyTypeProps) {

        if(!props.type) throw new CustomError("Company type must be specified!", 401)
        if(!props.cnpj) throw new CustomError("CNPJ must be informed", 401)
        if(!props.company_admin_id) throw new CustomError("User must be signed in", 401)
        if(!(Object.values(CompanyTypeOptions).includes(props.type))) throw new CustomError("Company type is not valid!", 401)

        this.id = randomUUID()
        this.type = props.type
        this.cnpj = props.cnpj
        this.company_admin_id = props.company_admin_id
     }

    static create(data: CompanyTypeProps) {
        const companyType = new CompanyTypeEntity(data)
        return companyType
    }
}