import { EmployerCardsEntity, EmployerCardsProps } from "../entities/employer-cards.entity";

export type EmployerCardsResponse = {
    id: string;
    contract_number: string;
    card_id: string;
    company_type_id: string,
    Cards: {
        card_name: string
    }
}
export interface IEmployercardRepository {
    findByCardIdAndCompanyTypeId(id: string, company_type_id: string): Promise<EmployerCardsResponse | null>
    findByCompanyType(company_type_id: string): Promise<EmployerCardsResponse[] | null>
    findByContractNumber(contract_number: string): Promise<EmployerCardsResponse | null>
    save(data: EmployerCardsProps): Promise<EmployerCardsEntity>
}