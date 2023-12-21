import { randomUUID } from 'crypto'

export type IAppUserValidationProps = {
    face_picture: string
    document_front_picture: string
    document_back_picture: string
    face_and_document_picture: string
    status: boolean
    app_user_auth_id: string
}

export class AppUserValidationEntity{
    id: string
    face_picture: string
    document_front_picture: string
    document_back_picture: string
    face_and_document_picture: string
    status: boolean
    app_user_auth_id: string

    private constructor(props: IAppUserValidationProps){
        
        this.id = randomUUID()
        this.face_picture = props.face_picture
        this.document_front_picture = props.document_front_picture
        this.document_back_picture = props.document_back_picture
        this.face_and_document_picture = props.face_and_document_picture
        this.status = props.status
        this.app_user_auth_id = props.app_user_auth_id
    }

    static async create(data: IAppUserValidationProps){
        const userValidation = new AppUserValidationEntity(data)
        return userValidation
    }
}