import { EmployerCardsEntity, EmployerCardsProps } from "../entities/employer-cards.entity";

export interface IEmployercardRepository{
    findByCardId(id: string): Promise<EmployerCardsEntity | null>
    findByCompanyType(company_type_id: string): Promise<EmployerCardsEntity | null>
    findByContractNumber(contract_number: string): Promise<EmployerCardsEntity | null>
    save(data: EmployerCardsProps): Promise<EmployerCardsEntity>
}