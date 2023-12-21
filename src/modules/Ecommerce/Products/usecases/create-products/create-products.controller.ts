import { Request, Response } from "express";
import { IProducts } from "../../repositories/products.repository";
import { ProductsProps } from "../../entities/products.entity";
import { CreateProducstUsecase } from "./create-products.usecase";

export class CreateProductsController {
    constructor(
        private productsRepository: IProducts
    ){}

    async handle(req: Request, res: Response){
        try{

            const data: ProductsProps = req.body

            console.log({data})

            data.company_user_id = req.companyUserId

            if(req.file){
                const { originalname, filename: bannerFilePath} = req.file
                data.banner = bannerFilePath

            }
            

            const productsUsecase = new CreateProducstUsecase(this.productsRepository)

            const product = await productsUsecase.execute(data)

            return res.json(product)

        }catch(err: any){
            res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}