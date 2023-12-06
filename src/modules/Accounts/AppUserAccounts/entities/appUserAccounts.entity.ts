import { randomUUID } from 'crypto'
import { CustomError } from '../../../../errors/custom.error'

export type AppUserAccountsProps = {
    app_user_id: string

}

export class AppUserAccountsEntity{

    id: string
    available_amount: number
    employer_cards_id: string
    app_user_id: string
    status: boolean

    private constructor(props: AppUserAccountsProps){
        this.id = randomUUID()
        this.available_amount = 0
        this.employer_cards_id = ''
        this.app_user_id = props.app_user_id
        this.status = true

        // if(!props.available_amount) throw new CustomError("Available amount is required", 401)
        // if(!props.employer_cards_id) throw new CustomError("Employer Cards id is required", 401)
        if(!props.app_user_id) throw new CustomError("App User Id is missing", 401)

        // if(typeof this.available_amount !== 'number') throw new CustomError("Availabe amount must be number type", 401)
        
    }

    static async create(data: AppUserAccountsProps){
        const appUserAccounts = new AppUserAccountsEntity(data)
        return appUserAccounts
    }
}