import { randomUUID } from 'crypto'

export type AdvertisementsProps = {
    name: string
    description: string | null
    price: number
    banner: string
    product_id: string
    company_admin_id: string
}

export class AdvertisementsEntity{

    id: string
    name: string
    description: string | null
    price: number
    banner: string
    product_id: string
    company_admin_id: string

    private constructor(props: AdvertisementsProps){

        this.id = randomUUID()
        this.name = props.name
        this.description = props.description
        this.price = props.price
        this.banner = props.banner
        this.product_id = props.product_id
        this.company_admin_id = props.company_admin_id
    }

    static async create(data: AdvertisementsProps){
        const ads = new AdvertisementsEntity(data)
        return ads
    }
}