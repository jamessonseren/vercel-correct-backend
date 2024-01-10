import { randomUUID } from 'crypto'
import { CustomError } from '../../../../errors/custom.error'

export type EmployerCardsProps = {
    card_id: string
    company_type_id: string

}

export class EmployerCardsEntity {
    id: string
    contract_number: string
    card_id: string
    company_type_id: string


    private constructor(props: EmployerCardsProps) {

        this.id = randomUUID()
        this.contract_number = randomUUID()
        this.card_id = props.card_id
        this.company_type_id = props.company_type_id



    }

    static async create(data: EmployerCardsProps) {
        if (!data.card_id) throw new CustomError("Card Id is required", 400)
        if (typeof data.card_id !== 'string') throw new CustomError("Card Id must be string type", 400)

        const employerCards = new EmployerCardsEntity(data)
        return employerCards
    }
}