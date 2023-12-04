import { randomUUID } from 'crypto'
import { CustomError } from '../../../../errors/custom.error'

export type EmployerCardsProps = {
    contract_number: string
    card_id: string
    company_type_id: string
    // start_day_cycle: number
    // cycle_duration: number
}

export class EmployerCardsEntity{
    id: String
    contract_number: string
    card_id: string
    company_type_id: string
    // start_day_cycle: number
    // cycle_duration: number

    private constructor(props: EmployerCardsProps){

        this.id = randomUUID()
        this.contract_number = randomUUID()
        this.card_id = props.card_id
        this.company_type_id = props.company_type_id
        // this.start_day_cycle = props.start_day_cycle
        // this.cycle_duration = props.cycle_duration

        if(!props.card_id) throw new CustomError("Card Id is required", 401)
        // if(!props.start_day_cycle) throw new CustomError("Start day is required", 401)
        // if(!props.cycle_duration) throw new CustomError("Cycle duration is required", 401)


    }

    static create(){}
}