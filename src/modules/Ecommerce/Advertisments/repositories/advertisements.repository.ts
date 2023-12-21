import { AdvertisementsEntity } from "../entities/advertisements.entity";

export interface IAdvertisements{
    findById(id: string, company_admin_id: string): Promise<AdvertisementsEntity | null>
    findByProductId(product_id: string, company_admin_id: string): Promise<AdvertisementsEntity[] | null>
    saveOrUpdate(data: AdvertisementsEntity): Promise<AdvertisementsEntity>

}