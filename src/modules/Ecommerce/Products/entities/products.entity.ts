import { randomUUID } from 'crypto'
import { CustomError } from '../../../../errors/custom.error'

export type ProductsProps = {
    name: string
    description: string | null
    banner:string
    category_name: string
    company_user_id: string
}

export class ProductsEntity{
    id: string
    name: string
    description: string | null
    banner: string
    category_name: string
    company_user_id: string

    private constructor(props: ProductsProps){

        this.id = randomUUID()
        this.name = props.name
        this.description = props.description
        this.banner = props.banner
        this.category_name = props.category_name
        this.company_user_id = props.company_user_id

        if(!props.name) throw new CustomError("Product name is required", 401)
        if(!this.category_name) throw new CustomError("Category name is required", 401)
        if(!this.company_user_id) throw new CustomError("Company admin is required", 401)

               
    }

    static async create(data: ProductsProps){
        const products = new ProductsEntity(data)
        return products
    }
}