import { it, describe, expect, beforeAll } from 'vitest'
import { CompanyDataMemoryRepository } from '../../../repositories/implementations/memory/company-data-memory.repository'
import { CreateCompanyDataUsecase } from '../create-company-data.usecase'
import { CompanyDataRequest } from '../../../companyDataDto/company-data.dto'
import { CompanyUserMemoryRepository } from '../../../../CompanyUser/repositories/implementations/company-user.memory.repository'
import { CorrectAdminRequest } from '../../../../../CorrectAdmin/useCases/create-correct-admin/create-correct-admin.usecase'
import { CorrectAdminMemoryRepository } from '../../../../../CorrectAdmin/repositories/implementations/correct-admin.memory.repository'
import { CreateCorrectAdminUseCase } from '../../../../../CorrectAdmin/useCases/create-correct-admin/create-correct-admin.usecase'
import { CreateCompanyUserUseCase } from '../../../../CompanyUser/usecases/create-company-user/create-company-user.usecase'
import { CompanyUserProps } from '../../../../CompanyUser/entities/company-user.entity'

describe("Create Company Data Usecase", () => {


    it("Should not be able to create company data if user is not auth", async () => {
        const companyDataRepository = new CompanyDataMemoryRepository()
        const companyUserRepository = new CompanyUserMemoryRepository()

        //create Correct Admin
        const correctAdminRepository = new CorrectAdminMemoryRepository()
        const adminMock: CorrectAdminRequest = {
            email: 'admin@admin.com',
            name: 'Correct Admin',
            userName: 'correct_admin',
            password: 'admin123',
            permissions: []
        }
        const createAdminUseCase = new CreateCorrectAdminUseCase(correctAdminRepository)
        const adminCreated = await createAdminUseCase.execute(adminMock)

        //create Company Admin
        const companyUserMock: CompanyUserProps = {
            cnpj: "empregador",
            cpf: 'admin_empregador',
            email: 'admin@admin.com',
            fullName: 'Company Admin',
            function: 'RH',
            client_admin: false,
            permissions: ['admin'],
            user_name: 'admin',
            password: 'admin123'
        }

        const createCompanyUserUseCase = new CreateCompanyUserUseCase(companyUserRepository)
        await createCompanyUserUseCase.execute(companyUserMock)

        const companyDataMock: CompanyDataRequest = {
            corporate_name: "Serviços Marítimos",
            cnpj: "empregador",
            classification: "A/B",
            total_employees: 523,
            phone_1: "658879848",
            phone_2: null,
            company_user_id: 'outro usuário',
            correct_admin_id: adminCreated.id
        }


        const createCompanyDataUsecase = new CreateCompanyDataUsecase(
            companyDataRepository,
            companyUserRepository,
            correctAdminRepository
        )



        expect(async () => {
            await createCompanyDataUsecase.execute(companyDataMock)
        }).rejects.toThrow("User is not allowed to process")
    })

    it("Should not be able to create company data if CNPJ does not match from Admin's Data.", async () => {
        const companyDataRepository = new CompanyDataMemoryRepository()
        const companyUserRepository = new CompanyUserMemoryRepository()

        //create Correct Admin
        const correctAdminRepository = new CorrectAdminMemoryRepository()
        const adminMock: CorrectAdminRequest = {
            email: 'admin@admin.com',
            name: 'Correct Admin',
            userName: 'correct_admin',
            password: 'admin123',
            permissions: ['correct']
        }
        const createAdminUseCase = new CreateCorrectAdminUseCase(correctAdminRepository)
        const adminCreated = await createAdminUseCase.execute(adminMock)

        //create Company Admin
        const companyUserMock: CompanyUserProps = {
            cnpj: 'empregador',
            cpf: 'admin_empregador',
            email: 'admin@admin.com',
            fullName: 'Company Admin',
            function: 'RH',
            client_admin: false,
            permissions: ['admin'],
            user_name: 'admin',
            password: 'admin123'
        }

        const createCompanyUserUseCase = new CreateCompanyUserUseCase(companyUserRepository)
        const companyUserCreated = await createCompanyUserUseCase.execute(companyUserMock)


        const companyDataMock: CompanyDataRequest = {
            corporate_name: "Serviços Marítimos",
            cnpj: "empregador",
            classification: "A/B",
            total_employees: 523,
            phone_1: "658879848",
            phone_2: null,
            company_user_id: companyUserCreated.id,
            correct_admin_id: adminCreated.id
        }

        const companyDataMockDuplicated: CompanyDataRequest = {
            corporate_name: "Serviços Marítimos",
            cnpj: "diferente_empregador",
            classification: "A/B",
            total_employees: 523,
            phone_1: "658879848",
            phone_2: null,
            company_user_id: companyUserCreated.id,
            correct_admin_id: adminCreated.id
        }

        const createCompanyDataUsecase = new CreateCompanyDataUsecase(
            companyDataRepository,
            companyUserRepository,
            correctAdminRepository
        )

        await createCompanyDataUsecase.execute(companyDataMock)



        expect(async () => {
            await createCompanyDataUsecase.execute(companyDataMockDuplicated)
        }).rejects.toThrow("CNPJ must be the same from user")

    })
}) 