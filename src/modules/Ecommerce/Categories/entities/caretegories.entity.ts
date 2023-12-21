import { randomUUID } from 'crypto'
export type CategoriesProps = {
    category_name: string
    correct_admin_id: string
}

export class CategoriesEntity{

    id: string
    category_name: string
    correct_admin_id: string

    private constructor(props: CategoriesProps){

        this.id = randomUUID()
        this.category_name = props.category_name
        this.correct_admin_id = props.correct_admin_id

    }

    static async create(){}
}