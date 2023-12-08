import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { EmployerCardsEntity, EmployerCardsProps } from "../../entities/employer-cards.entity";
import { EmployerCardsResponse, IEmployercardRepository } from "../employer-card.repository";

export class EmployerCardsPrismaRepository implements IEmployercardRepository{

    async findByCardId(id: string): Promise<EmployerCardsResponse | null> {
        const employerCard = await prismaClient.employerCards.findFirst({
            where:{
                card_id: id
            },
            include:{
                Cards: true
            }
        })

        return employerCard
    }

    async findByCompanyType(company_type_id: string): Promise<EmployerCardsResponse[] | null> {
        const employerCard = await prismaClient.employerCards.findMany({
            where:{
                company_type_id
            },
            include:{
                Cards: true
            }
        })

        return employerCard
    }
    
    async findByContractNumber(contract_number: string): Promise<EmployerCardsResponse | null> {
        const employerCard = await prismaClient.employerCards.findUnique({
            where:{
                contract_number
            },
            include:{
                Cards: true
            }
        })

        return employerCard
    }

    async save(data: EmployerCardsProps): Promise<EmployerCardsEntity> {
        const employerCard = await prismaClient.employerCards.create({
            data:{
                card_id: data.card_id,
                company_type_id: data.company_type_id,
            }
        })

        return employerCard
    }

}