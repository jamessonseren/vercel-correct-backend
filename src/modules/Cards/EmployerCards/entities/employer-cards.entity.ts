import { randomUUID } from 'crypto'
import { CustomError } from '../../../../errors/custom.error'

export type EmployerCardsProps = {
    card_id: string
    company_type_id: string
<<<<<<< HEAD
    
}

export class EmployerCardsEntity{
=======

}

export class EmployerCardsEntity {
>>>>>>> correct-nodejs-backend/main
    id: string
    contract_number: string
    card_id: string
    company_type_id: string
<<<<<<< HEAD
    

    private constructor(props: EmployerCardsProps){
=======


    private constructor(props: EmployerCardsProps) {
>>>>>>> correct-nodejs-backend/main

        this.id = randomUUID()
        this.contract_number = randomUUID()
        this.card_id = props.card_id
        this.company_type_id = props.company_type_id

<<<<<<< HEAD
        if(!props.card_id) throw new CustomError("Card Id is required", 401)

        if(typeof props.card_id !== 'string') throw new CustomError("Card Id must be string type", 401)

    }

    static async create(data: EmployerCardsProps){
=======


    }

    static async create(data: EmployerCardsProps) {
        if (!data.card_id) throw new CustomError("Card Id is required", 400)
        if (typeof data.card_id !== 'string') throw new CustomError("Card Id must be string type", 400)

>>>>>>> correct-nodejs-backend/main
        const employerCards = new EmployerCardsEntity(data)
        return employerCards
    }
}