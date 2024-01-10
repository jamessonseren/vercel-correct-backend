import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { CompanyAddressEntity } from "../../entities/company-address.entity";
import { ICompanyAddressRepository } from "../company-address.repository";

export class CompanyAddressPrismaRepository implements ICompanyAddressRepository{
    async saveOrUpdate(data: CompanyAddressEntity): Promise<CompanyAddressEntity> {
        const companyAddress = await prismaClient.companyAddress.upsert({
            where:{
                cnpj: data.cnpj
            },
            create:{
                street: data.street,
                number: data.number,
                complement: data.complement,
                neighborhood: data.neighborhood,
                zip_code: data.zip_code,
                city: data.city,
                state: data.state,
                country: data.country,
                cnpj: data.cnpj
            },
            update:{
                street: data.street,
                number: data.number,
                complement: data.complement,
                neighborhood: data.neighborhood,
                zip_code: data.zip_code,
                city: data.city,
                state: data.state,
                country: data.country,
                cnpj: data.cnpj
            }
        })

        return companyAddress
    }
    async findById(id: string): Promise<CompanyAddressEntity | null> {
        const companyAddress = await prismaClient.companyAddress.findUnique({
            where:{
                id
            }
        })

        return companyAddress
    }
    async findByCnpj(cnpj: string): Promise<CompanyAddressEntity | null> {
        const companyAddress = await prismaClient.companyAddress.findUnique({
            where:{
                cnpj
            }
        })

        return companyAddress
    }

}