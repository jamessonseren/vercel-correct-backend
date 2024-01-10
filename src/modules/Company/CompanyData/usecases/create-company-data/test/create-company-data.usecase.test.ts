import { it, describe, expect, beforeAll } from 'vitest'
import { CompanyDataMemoryRepository } from '../../../repositories/implementations/memory/company-data-memory.repository'
<<<<<<< HEAD
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
=======
import { CreateCompanyDataUsecase } from '../create-company-data.usecase'
import { CompanyDataRequest } from '../../../companyDataDto/company-data.dto'
import { CompanyUserMemoryRepository } from '../../../../CompanyUser/repositories/implementations/company-user.memory.repository'
import { CorrectAdminRequest } from '../../../../../CorrectAdmin/useCases/create-correct-admin/create-correct-admin.usecase'
import { CorrectAdminMemoryRepository } from '../../../../../CorrectAdmin/repositories/implementations/correct-admin.memory.repository'
import { CreateCorrectAdminUseCase } from '../../../../../CorrectAdmin/useCases/create-correct-admin/create-correct-admin.usecase'
import { CreateCompanyUserUseCase } from '../../../../CompanyUser/usecases/create-company-user/create-company-user.usecase'
import { CompanyUserProps } from '../../../../CompanyUser/entities/company-user.entity'

describe("Create Company Data Usecase", () => {
>>>>>>> correct-nodejs-backend/main


    it("Should not be able to create company data if user is not auth", async () => {
        const companyDataRepository = new CompanyDataMemoryRepository()
<<<<<<< HEAD
        const companyAdminRepository = new CompanyAdminMemoryRepository()
        
=======
        const companyUserRepository = new CompanyUserMemoryRepository()

>>>>>>> correct-nodejs-backend/main
        //create Correct Admin
        const correctAdminRepository = new CorrectAdminMemoryRepository()
        const adminMock: CorrectAdminRequest = {
            email: 'admin@admin.com',
            name: 'Correct Admin',
            userName: 'correct_admin',
            password: 'admin123',
<<<<<<< HEAD
=======
            permissions: []
>>>>>>> correct-nodejs-backend/main
        }
        const createAdminUseCase = new CreateCorrectAdminUseCase(correctAdminRepository)
        const adminCreated = await createAdminUseCase.execute(adminMock)

        //create Company Admin
<<<<<<< HEAD
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
=======
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
>>>>>>> correct-nodejs-backend/main
            classification: "A/B",
            total_employees: 523,
            phone_1: "658879848",
            phone_2: null,
<<<<<<< HEAD
            company_admin_id: 'outro_usuario',
=======
            company_user_id: 'outro usuário',
>>>>>>> correct-nodejs-backend/main
            correct_admin_id: adminCreated.id
        }


        const createCompanyDataUsecase = new CreateCompanyDataUsecase(
            companyDataRepository,
<<<<<<< HEAD
            companyAdminRepository
        )


        
       expect(async () => {
        await createCompanyDataUsecase.execute(companyDataMock)
       }).rejects.toThrow("User is not allowed to process")
=======
            companyUserRepository,
            correctAdminRepository
        )



        expect(async () => {
            await createCompanyDataUsecase.execute(companyDataMock)
        }).rejects.toThrow("User is not allowed to process")
>>>>>>> correct-nodejs-backend/main
    })

    it("Should not be able to create company data if CNPJ does not match from Admin's Data.", async () => {
        const companyDataRepository = new CompanyDataMemoryRepository()
<<<<<<< HEAD
        const companyAdminRepository = new CompanyAdminMemoryRepository()
        
=======
        const companyUserRepository = new CompanyUserMemoryRepository()

>>>>>>> correct-nodejs-backend/main
        //create Correct Admin
        const correctAdminRepository = new CorrectAdminMemoryRepository()
        const adminMock: CorrectAdminRequest = {
            email: 'admin@admin.com',
            name: 'Correct Admin',
            userName: 'correct_admin',
            password: 'admin123',
<<<<<<< HEAD
=======
            permissions: ['correct']
>>>>>>> correct-nodejs-backend/main
        }
        const createAdminUseCase = new CreateCorrectAdminUseCase(correctAdminRepository)
        const adminCreated = await createAdminUseCase.execute(adminMock)

        //create Company Admin
<<<<<<< HEAD
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
=======
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
>>>>>>> correct-nodejs-backend/main
            classification: "A/B",
            total_employees: 523,
            phone_1: "658879848",
            phone_2: null,
<<<<<<< HEAD
            company_admin_id: companyAdminCreated.id,
=======
            company_user_id: companyUserCreated.id,
>>>>>>> correct-nodejs-backend/main
            correct_admin_id: adminCreated.id
        }

        const companyDataMockDuplicated: CompanyDataRequest = {
            corporate_name: "Serviços Marítimos",
            cnpj: "diferente_empregador",
<<<<<<< HEAD
            cnae_id: "1",
=======
>>>>>>> correct-nodejs-backend/main
            classification: "A/B",
            total_employees: 523,
            phone_1: "658879848",
            phone_2: null,
<<<<<<< HEAD
            company_admin_id: companyAdminCreated.id,
=======
            company_user_id: companyUserCreated.id,
>>>>>>> correct-nodejs-backend/main
            correct_admin_id: adminCreated.id
        }

        const createCompanyDataUsecase = new CreateCompanyDataUsecase(
            companyDataRepository,
<<<<<<< HEAD
            companyAdminRepository
        )

       await createCompanyDataUsecase.execute(companyDataMock)
=======
            companyUserRepository,
            correctAdminRepository
        )

        await createCompanyDataUsecase.execute(companyDataMock)
>>>>>>> correct-nodejs-backend/main



        expect(async () => {
            await createCompanyDataUsecase.execute(companyDataMockDuplicated)
<<<<<<< HEAD
        }).rejects.toThrow("CNPJ must be the same from user")        
        
=======
        }).rejects.toThrow("CNPJ must be the same from user")

>>>>>>> correct-nodejs-backend/main
    })
}) 