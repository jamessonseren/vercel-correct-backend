import { randomUUID } from 'crypto'
import { CustomError } from '../../../../../errors/custom.error'

export type IAuthAppUserProps = {
    cpf: string
    email: string
    password: string
    app_user_data_id: string | null
}
export class AppUserByUserEntity{
    id: string
    cpf: string
    email: string
    password: string
    app_user_data_id: string | null

    private constructor(props: IAuthAppUserProps){
        if(!props.cpf) throw new CustomError("CPF is required", 401)
        if(!props.email) throw new CustomError("Email is required", 401)
        if(!props.password) throw new CustomError("Password is required", 401)

        this.id = randomUUID()
        this.cpf = props.cpf
        this.email = props.email
        this.password = props.password
        this.app_user_data_id = props.app_user_data_id
    }
    
    static async create(data: IAuthAppUserProps){
        const appUser = new AppUserByUserEntity(data)
        return appUser
    }
}