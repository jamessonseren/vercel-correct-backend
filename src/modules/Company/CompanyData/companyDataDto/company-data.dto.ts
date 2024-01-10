export type CompanyDataRequest = {
    corporate_name: string;
    cnpj: string;
    classification: string;
    total_employees: number;
    phone_1: string;
    phone_2: string | null;
    company_user_id: string;
    correct_admin_id: string
}