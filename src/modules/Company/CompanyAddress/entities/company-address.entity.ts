import { randomUUID } from 'crypto'
import { CustomError } from '../../../../errors/custom.error'

export type CompanyAddressProps = {
    street: string
    number: string
    complement: string | null
    neighborhood: string
    zip_code: string
    city: string
    state: string
    country: string
    cnpj: string

}

export class CompanyAddressEntity {
    id: string
    street: string
    number: string
    complement: string | null
    neighborhood: string
    zip_code: string
    city: string
    state: string
    country: string
    cnpj: string

    private constructor(props: CompanyAddressProps) {

        this.id = randomUUID()
        this.street = props.street
        this.number = props.number
        this.complement = props.complement
        this.neighborhood = props.neighborhood
        this.zip_code = props.zip_code
        this.city = props.city
        this.state = props.state
        this.country = props.country
        this.cnpj = props.cnpj

    }

    static create(data: CompanyAddressProps) {
        if (!data.street) throw new CustomError("Street is required", 400)
        if (!data.number) throw new CustomError("Number is required", 400)
        if (!data.neighborhood) throw new CustomError("Neighbohood is required", 400)
        if (!data.zip_code) throw new CustomError("Zip Code is required", 400)
        if (!data.city) throw new CustomError("City is required", 400)
        if (!data.state) throw new CustomError("State is required", 400)
        if (!data.country) throw new CustomError("Country is required", 400)
        if (!data.cnpj) throw new CustomError("Company data is required", 400)
        
        const companyAddress = new CompanyAddressEntity(data)
        return companyAddress
    }



}