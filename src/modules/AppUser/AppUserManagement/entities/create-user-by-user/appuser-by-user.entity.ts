import { randomUUID } from 'crypto'
import { CustomError } from '../../../../../errors/custom.error'
import { PasswordBCrypt } from '../../../../../infra/shared/crypto/password.bcrypt'

export type IAuthAppUserProps = {
    cpf: string
    email: string
    password: string
}
export class AppUserByUserEntity{
    id: string
    cpf: string
    email: string
    password: string

    private constructor(props: IAuthAppUserProps){
        
        this.id = randomUUID()
        this.cpf = props.cpf
        this.email = props.email
        this.password = props.password
    }
    
    static async create(data: IAuthAppUserProps){
        
        if(!data.cpf) throw new CustomError("CPF is required", 400)
        if(!data.email) throw new CustomError("Email is required", 400)
        if(!data.password) throw new CustomError("Password is required", 400)
        
        const bcrypt = new PasswordBCrypt()
        const passwordHash = await bcrypt.hash(data.password)

        data.password = passwordHash
        
        const appUser = new AppUserByUserEntity(data)
        return appUser
    }
}