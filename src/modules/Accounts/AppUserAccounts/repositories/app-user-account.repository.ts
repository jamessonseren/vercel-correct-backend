import { AppUserAccountsEntity } from "../entities/appUserAccounts.entity";

export type AppUserAccountsResponse = {
    id: string
    available_amount: number
    employer_cards_id: string
    app_user_id: string
    status: boolean,
    AppUserAuth: {
        id: string;
        cpf: string;
        email: string;
        password: string;
        app_user_data_id: string | null;
        authenticated: boolean;
        created_at: Date | null;
        updated_at: Date | null;
    },
    EmployerCards: {
        id: string;
        contract_number: string;
        card_id: string;
        company_type_id: string,
        Cards:{
            card_name: string
        }
    };
}
export interface IAppUserAccountRepository{
    findById(id: string): Promise<AppUserAccountsEntity | null>
    findByAccountNumber(id: string): Promise<AppUserAccountsEntity | null>
    findByEmployerCardsId(id: string): Promise<AppUserAccountsResponse | null>
    findByAppUserAndEmployerCardId(user_id: string, employer_card_id: string): Promise<AppUserAccountsResponse | null>
    findByAppUserId(id: string): Promise<AppUserAccountsResponse | null>
    save(data: AppUserAccountsEntity): Promise<AppUserAccountsResponse>
}