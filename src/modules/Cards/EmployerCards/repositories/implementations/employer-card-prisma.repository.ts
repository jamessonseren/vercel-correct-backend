import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { EmployerCardsEntity, EmployerCardsProps } from "../../entities/employer-cards.entity";
import { IEmployercardRepository } from "../employer-card.repository";

export class EmployerCardsPrismaRepository implements IEmployercardRepository{

    async findByCardId(id: string): Promise<EmployerCardsEntity | null> {
        const employerCard = await prismaClient.employerCards.findUnique({
            where:{
                id
            }
        })

        return employerCard
    }

    async findByCompanyType(company_type_id: string): Promise<EmployerCardsEntity | null> {
        const employerCard = await prismaClient.employerCards.findFirst({
            where:{
                company_type_id
            }
        })

        return employerCard
    }
    
    async findByContractNumber(contract_number: string): Promise<EmployerCardsEntity | null> {
        const employerCard = await prismaClient.employerCards.findUnique({
            where:{
                contract_number
            }
        })

        return employerCard
    }

    async save(data: EmployerCardsProps): Promise<EmployerCardsEntity> {
        const employerCard = await prismaClient.employerCards.create({
            data:{
                card_id: data.card_id,
                company_type_id: data.company_type_id,
                contract_number: data.contract_number
            }
        })

        return employerCard
    }

}