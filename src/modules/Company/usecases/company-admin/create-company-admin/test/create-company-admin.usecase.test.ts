import { it, describe, expect } from 'vitest'
import { CompanyAdminMemoryRepository } from '../../../../repositories/company-admin/implementations/company-admin.memory.repository'
import { CompanyAdminRequest, CreateCompanyAdminUseCase } from '../create-company-admin.usecase'

describe("Create Company Admin Usecase", () => {
    it("Should be able to create a new Company Admin", async () => {
        const companyAdminRepository = new CompanyAdminMemoryRepository()

        const companyAdminMock: CompanyAdminRequest = {
            cnpj: '184189484',
            email: 'admin@admin.com',
            fullName: 'Company Admin',
            function: 'RH',
            status: true,
            password: 'admin123'
        }

        const createCompanyAdminUseCase = new CreateCompanyAdminUseCase(companyAdminRepository)
        const createAdmin = await createCompanyAdminUseCase.execute(companyAdminMock)
        expect(createAdmin).toHaveProperty('id')
    })

    it("Should not be able to create a new Company Admin if CNPJ already exists", async () => {
        const companyAdminRepository = new CompanyAdminMemoryRepository()

        const companyAdminMock: CompanyAdminRequest = {
            cnpj: '184189484',
            email: 'admin@admin.com',
            fullName: 'Company Admin',
            function: 'RH',
            status: true,
            password: 'admin123'
        }

        const companyAdminMockDuplicated: CompanyAdminRequest = {
            cnpj: '184189484',
            email: 'admin@admin.com',
            fullName: 'Company Admin',
            function: 'RH',
            status: true,
            password:'admin123'
        }
          

        const createCompanyAdminUseCase = new CreateCompanyAdminUseCase(companyAdminRepository)
        await createCompanyAdminUseCase.execute(companyAdminMock)
        expect(async () => {
            await createCompanyAdminUseCase.execute(companyAdminMockDuplicated)
        }).rejects.toThrow("CNPJ already registered")
    })

    it("Should not be able to create a new Company Admin if email already exists", async () => {
        const companyAdminRepository = new CompanyAdminMemoryRepository()

        const companyAdminMock: CompanyAdminRequest = {
            cnpj: '184189484',
            email: 'admin@admin.com',
            fullName: 'Company Admin',
            function: 'RH',
            status: true,
            password: 'admin123'
        }

        const companyAdminMockDuplicated: CompanyAdminRequest = {
            cnpj: '18418948788',
            email: 'admin@admin.com',
            fullName: 'Company Admin',
            function: 'RH',
            status: true,
            password:'admin123'
        }
          

        const createCompanyAdminUseCase = new CreateCompanyAdminUseCase(companyAdminRepository)
        await createCompanyAdminUseCase.execute(companyAdminMock)
        expect(async () => {
            await createCompanyAdminUseCase.execute(companyAdminMockDuplicated)
        }).rejects.toThrow("Email already registered")
    })
})