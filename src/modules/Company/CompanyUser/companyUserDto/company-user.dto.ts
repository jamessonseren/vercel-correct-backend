export type  CompanyUserResponse = {
    id: string,
    fullName: string | null,
    user_name: string,
    permissions: string[],
    client_admin: boolean,
    email: string | null,
    cnpj: string,
    function: string | null
}