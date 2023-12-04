import { it, describe, expect, beforeAll } from 'vitest'
import { CompanyDataMemoryRepository } from '../../../repositories/implementations/memory/company-data-memory.repository'
import { CompanyDataRequest, CreateCompanyDataUsecase } from '../create-company-data.usecase'
import { CompanyAdminMemoryRepository } from '../../../../CompanyAdmin/repositories/implementations/company-admin.memory.repository'
import { CorrectAdminRequest } from '../../../../../CorrectAdmin/useCases/create-correct-admin/create-correct-admin.usecase'
import { CorrectAdminMemoryRepository } from '../../../../../CorrectAdmin/repositories/implementations/correct-admin.memory.repository'
import { CreateCorrectAdminUseCase } from '../../../../../CorrectAdmin/useCases/create-correct-admin/create-correct-admin.usecase'
import { CompanyAdminRequest, CreateCompanyAdminUseCase } from '../../../../CompanyAdmin/usecases/create-company-admin/create-company-admin.usecase'

describe("Create Company Data Usecase", () => {
    it("Should be able to create company data", async () => {
        const companyDataRepository = new CompanyDataMemoryRepository()
        const companyAdminRepository = new CompanyAdminMemoryRepository()
        
        //create Correct Admin
        const correctAdminRepository = new CorrectAdminMemoryRepository()
        const adminMock: CorrectAdminRequest = {
            email: 'admin@admin.com',
            name: 'Correct Admin',
            userName: 'correct_admin',
            password: 'admin123',
        }
        const createAdminUseCase = new CreateCorrectAdminUseCase(correctAdminRepository)
        const adminCreated = await createAdminUseCase.execute(adminMock)

        //create Company Admin

        const companyAdminMock: CompanyAdminRequest = {
            cnpj: 'empregador',
            email: 'admin@admin.com',
            fullName: 'Company Admin',
            function: 'RH',
            status: true,
            password: 'admin123'
        }

        const createCompanyAdminUseCase = new CreateCompanyAdminUseCase(companyAdminRepository)
        const companyAdminCreated = await createCompanyAdminUseCase.execute(companyAdminMock)

        
        const companyDataMock: CompanyDataRequest = {
            corporate_name: "Serviços Marítimos",
            cnpj: "empregador",
            cnae_id: "1",
            classification: "A/B",
            total_employees: 523,
            phone_1: "658879848",
            phone_2: null,
            company_admin_id: companyAdminCreated.id,
            correct_admin_id: adminCreated.id
        }

        const createCompanyDataUsecase = new CreateCompanyDataUsecase(
            companyDataRepository,
            companyAdminRepository
        )

        const createCompanyData = await createCompanyDataUsecase.execute(companyDataMock)


        expect(createCompanyData).toHaveProperty('id')

        
        
    })


    it("Should not be able to create company data if user is not auth", async () => {
        const companyDataRepository = new CompanyDataMemoryRepository()
        const companyAdminRepository = new CompanyAdminMemoryRepository()
        
        //create Correct Admin
        const correctAdminRepository = new CorrectAdminMemoryRepository()
        const adminMock: CorrectAdminRequest = {
            email: 'admin@admin.com',
            name: 'Correct Admin',
            userName: 'correct_admin',
            password: 'admin123',
        }
        const createAdminUseCase = new CreateCorrectAdminUseCase(correctAdminRepository)
        const adminCreated = await createAdminUseCase.execute(adminMock)

        //create Company Admin
        const companyAdminMock: CompanyAdminRequest = {
            cnpj: 'empregador',
            email: 'admin@admin.com',
            fullName: 'Company Admin',
            function: 'RH',
            status: true,
            password: 'admin123'
        }

        const createCompanyAdminUseCase = new CreateCompanyAdminUseCase(companyAdminRepository)
        await createCompanyAdminUseCase.execute(companyAdminMock)

        
        const companyDataMock: CompanyDataRequest = {
            corporate_name: "Serviços Marítimos",
            cnpj: "empregador",
            cnae_id: "1",
            classification: "A/B",
            total_employees: 523,
            phone_1: "658879848",
            phone_2: null,
            company_admin_id: 'outro_usuario',
            correct_admin_id: adminCreated.id
        }


        const createCompanyDataUsecase = new CreateCompanyDataUsecase(
            companyDataRepository,
            companyAdminRepository
        )


        
       expect(async () => {
        await createCompanyDataUsecase.execute(companyDataMock)
       }).rejects.toThrow("User is not allowed to process")
    })

    it("Should not be able to create company data if CNPJ does not match from Admin's Data.", async () => {
        const companyDataRepository = new CompanyDataMemoryRepository()
        const companyAdminRepository = new CompanyAdminMemoryRepository()
        
        //create Correct Admin
        const correctAdminRepository = new CorrectAdminMemoryRepository()
        const adminMock: CorrectAdminRequest = {
            email: 'admin@admin.com',
            name: 'Correct Admin',
            userName: 'correct_admin',
            password: 'admin123',
        }
        const createAdminUseCase = new CreateCorrectAdminUseCase(correctAdminRepository)
        const adminCreated = await createAdminUseCase.execute(adminMock)

        //create Company Admin
        const companyAdminMock: CompanyAdminRequest = {
            cnpj: 'empregador',
            email: 'admin@admin.com',
            fullName: 'Company Admin',
            function: 'RH',
            status: true,
            password: 'admin123'
        }

        const createCompanyAdminUseCase = new CreateCompanyAdminUseCase(companyAdminRepository)
        const companyAdminCreated = await createCompanyAdminUseCase.execute(companyAdminMock)

        
        const companyDataMock: CompanyDataRequest = {
            corporate_name: "Serviços Marítimos",
            cnpj: "empregador",
            cnae_id: "1",
            classification: "A/B",
            total_employees: 523,
            phone_1: "658879848",
            phone_2: null,
            company_admin_id: companyAdminCreated.id,
            correct_admin_id: adminCreated.id
        }

        const companyDataMockDuplicated: CompanyDataRequest = {
            corporate_name: "Serviços Marítimos",
            cnpj: "diferente_empregador",
            cnae_id: "1",
            classification: "A/B",
            total_employees: 523,
            phone_1: "658879848",
            phone_2: null,
            company_admin_id: companyAdminCreated.id,
            correct_admin_id: adminCreated.id
        }

        const createCompanyDataUsecase = new CreateCompanyDataUsecase(
            companyDataRepository,
            companyAdminRepository
        )

       await createCompanyDataUsecase.execute(companyDataMock)



        expect(async () => {
            await createCompanyDataUsecase.execute(companyDataMockDuplicated)
        }).rejects.toThrow("CNPJ must be the same from user")        
        
    })
}) 