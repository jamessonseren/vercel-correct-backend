import { it, expect, describe, beforeAll} from 'vitest'
import { CompanyTypeEntity } from '../company-type.entity'
import { CompanyAdminEntity } from '../../../CompanyAdmin/entities/company-admin.entity'
import { randomUUID } from 'crypto'

describe("Company Type Entity", () => {

    let companyAdmin:CompanyAdminEntity;

    beforeAll(async () => {
        // Criação do admin da empresa
        companyAdmin = {
            id: randomUUID(),
            email: 'email@email.com',
            cnpj: 'comercio',
            password: 'companyadmin123',
            fullName: 'Company admin',
            status: true,
            function: 'RH'
        };

        // Qualquer outra lógica de inicialização pode ser adicionada aqui
    });
    it("Should be able to select Admin Company Type", async () => {
        
        const companyType = await CompanyTypeEntity.create({
            type: 'comercio',
            cnpj: 'comercio',
            company_admin_id: companyAdmin.id
        })

        expect(companyType).toBeInstanceOf(CompanyTypeEntity)
        expect(companyType).toHaveProperty('id')
    })

    it("Should not be able to select Admin Company Type if CNPJ is missing", async () => {
 
        expect(async () => {
            await CompanyTypeEntity.create({
                type: "comercio",
                cnpj: '',
                company_admin_id: companyAdmin.id
            })
        }).rejects.toThrow("CNPJ must be informed")
    })

    it("Should not be able to select Admin Company Type if Admin Id is missing", async () => {
 
        expect(async () => {
            await CompanyTypeEntity.create({
                type: "comercio",
                cnpj: 'comercio',
                company_admin_id:''
            })
        }).rejects.toThrow("User must be signed in")

    })
})