import { CustomError } from "../../../../../errors/custom.error";
import { ProductsEntity, ProductsProps } from "../../entities/products.entity";
import { IProducts } from "../../repositories/products.repository";
import path from 'path'
import fs from 'fs'

export class CreateProducstUsecase{
    constructor(
        private productsRepository: IProducts
    ){}

    async execute(data: ProductsProps){

        if(data.banner){

            const filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'tmp', data.banner)
            if (!fs.existsSync(filePath)) throw new CustomError("File not found", 400);
        }

        const product = await ProductsEntity.create(data)

        console.log({product})

        //get all products by name
        const findProduct = await this.productsRepository.findByName(data.name, data.company_user_id)
        if(findProduct) throw new CustomError("Product name already registered", 409)

        const createProduct = await this.productsRepository.save(product)

        return createProduct
    }
}