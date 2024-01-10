import { Permissions, UserRoles } from "@prisma/client"

export type CompanyUserResponse = {
    id: string,
    fullName: string | null,
    user_name: string,
    roles: UserRoles[],
    permissions: Permissions[],
    user_code: string
    client_admin: boolean,
    email: string | null,
    cnpj: string,
    cpf: string | null,
    function: string | null
}