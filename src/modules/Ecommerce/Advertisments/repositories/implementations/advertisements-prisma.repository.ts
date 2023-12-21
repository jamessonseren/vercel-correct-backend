import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { AdvertisementsEntity } from "../../entities/advertisements.entity";
import { IAdvertisements } from "../advertisements.repository";

export class AdvertisementsPrismaRepository implements IAdvertisements{
    async findById(id: string, company_admin_id: string): Promise<AdvertisementsEntity | null> {
        const advertisements = await prismaClient.advertisement.findUnique({
            where:{
                id: id,
                company_admin_id
            }
        })

        return advertisements
    }
    async findByProductId(product_id: string, company_admin_id: string): Promise<AdvertisementsEntity[] | null> {
        const advertisements = await prismaClient.advertisement.findMany({
            where:{
                product_id,
                company_admin_id
            }
        })

        return advertisements
    }
    async saveOrUpdate(data: AdvertisementsEntity): Promise<AdvertisementsEntity> {
        const advertisements = await prismaClient.advertisement.upsert({
            where:{
                id: data.id
            },
            create:{
                name: data.name,
                description: data.description,
                price: data.price,
                banner: data.banner,
                product_id: data.product_id,
                company_admin_id: data.company_admin_id
            }, 
            update:{
                name: data.name,
                description: data.description,
                price: data.price,
                banner: data.banner
            }
        })

        return advertisements
    }

}