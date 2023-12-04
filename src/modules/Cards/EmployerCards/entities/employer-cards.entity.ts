import { randomUUID } from 'crypto'
import { CustomError } from '../../../../errors/custom.error'

export type EmployerCardsProps = {
    card_id: string
    company_type_id: string
    
}

export class EmployerCardsEntity{
    id: String
    contract_number: string
    card_id: string
    company_type_id: string
    

    private constructor(props: EmployerCardsProps){

        this.id = randomUUID()
        this.contract_number = randomUUID()
        this.card_id = props.card_id
        this.company_type_id = props.company_type_id

        if(!props.card_id) throw new CustomError("Card Id is required", 401)

        if(typeof props.card_id !== 'string') throw new CustomError("Card Id must be string type", 401)

    }

    static async create(data: EmployerCardsProps){
        const employerCards = new EmployerCardsEntity(data)
        return employerCards
    }
}