import { randomUUID } from 'crypto'
import { CustomError } from '../../../../errors/custom.error'

export type AppUserProps = {
    internal_company_code: string | null
    company_owner: boolean
    full_name: string
    gender: string
    rg: string | null
    cpf: string
    driver_license: string | null
    date_of_birth: Date
    function: string | null
    salary: number | null
    company_type_id: string
    dependents_quantity: number
    marital_status: string
    correct_admin_id: string
}

export class AppUserbyCorrectEntity{
    id: string
    internal_company_code: string | null
    company_owner: boolean
    full_name: string
    gender: string
    rg: string | null
    cpf: string
    driver_license: string | null
    date_of_birth: Date
    function: string | null
    salary: number | null
    company_type_id: string
    marital_status: string
    dependents_quantity: number
    correct_admin_id: string

    private constructor(props: AppUserProps){
        if(!props.full_name) throw new CustomError("Name is required", 401)
        if(!props.gender) throw new CustomError("Gender is required", 401)
        if(!props.cpf) throw new CustomError("CPF is required", 401)
        if(!props.date_of_birth) throw new CustomError("Date of birth is required", 401)
        if(!props.company_type_id) throw new CustomError("Company Id is required", 401)
        if(!props.correct_admin_id) throw new CustomError("Correct Admin ID is required", 401)



        this.id = randomUUID()
        this.internal_company_code = props.internal_company_code
        this.company_owner = props.company_owner
        this.full_name = props.full_name
        this.gender = props.gender
        this.rg = props.rg
        this.cpf = props.cpf
        this.driver_license = props.driver_license
        this.date_of_birth = props.date_of_birth
        this.function = props.function
        this.salary = props.salary
        this.company_type_id = props.company_type_id
        this.marital_status = props.marital_status
        this.dependents_quantity = props.dependents_quantity
        this.correct_admin_id = props.correct_admin_id
    }

    static create(data: AppUserProps){
        const appUser = new AppUserbyCorrectEntity(data)
        return appUser
    }
}