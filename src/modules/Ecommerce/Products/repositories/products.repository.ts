import { ProductsEntity } from "../entities/products.entity";

export interface IProducts{
    findById(id: string, company_admin_id: string): Promise<ProductsEntity | null>
    findByCategory(category_name: string, company_admin_id: string): Promise<ProductsEntity[] | null>
    findByName(product_name: string, company_admin_id: string): Promise<ProductsEntity | null>
    save(data: ProductsEntity): Promise<ProductsEntity>
}