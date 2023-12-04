import { it, expect, describe } from 'vitest'
import { CompanyAdminEntity } from '../company-admin.entity'

describe("Company Admin Entity", () => {
    it("Should be able to create a Company Admin", async () => {
        const companyAdmin = await CompanyAdminEntity.create({
            email: 'email@email.com',
            cnpj: '12548864',
            password: 'companyadmin123',
            fullName: 'Company admin',
            status: true,
            function: 'RH'
        })

        expect(companyAdmin).toBeInstanceOf(CompanyAdminEntity)
        expect(companyAdmin).toHaveProperty('id')
    })

    it("Should not be able to create a Company Admin if email is empty", async () => {
        expect(async () => {
            await CompanyAdminEntity.create({
                email: '',
                cnpj: '12548864',
                password: 'companyadmin123',
                fullName: 'Company admin',
                status: true,
                function: 'RH'
            })

        }).rejects.toThrow("Email is required")  
    })
    it("Should not be able to create a Company Admin if cnpj is empty", async () => {
        expect(async () => {
            await CompanyAdminEntity.create({
                email: 'email@email.com',
                cnpj: '',
                password: 'companyadmin123',
                fullName: 'Company admin',
                status: true,
                function: 'RH'
            })

        }).rejects.toThrow("CNPJ is required")  
    })
    it("Should not be able to create a Company Admin if password is empty", async () => {
        expect(async () => {
            await CompanyAdminEntity.create({
                email: 'email@email.com',
                cnpj: '1658156489',
                password: '',
                fullName: 'Company admin',
                status: true,
                function: 'RH'
            })

        }).rejects.toThrow("Password is required")  
    })

    it("Should not be able to create a Company Admin if name is empty", async () => {
        expect(async () => {
            await CompanyAdminEntity.create({
                email: 'email@email.com',
                cnpj: '1658156489',
                password: 'ad6565651v',
                fullName: '',
                status: true,
                function: 'RH'
            })

        }).rejects.toThrow("Name is required")  
    })

    it("Should not be able to create a Company Admin if function is empty", async () => {
        expect(async () => {
            await CompanyAdminEntity.create({
                email: 'email@email.com',
                cnpj: '1658156489',
                password: 'ad6565651v',
                fullName: 'Company Admin name',
                status: true,
                function: ''
            })

        }).rejects.toThrow("Function is required")  
    })
})