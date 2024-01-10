<<<<<<< HEAD
// import { it, expect, describe } from 'vitest'
// import { CompanyUserEntity } from '../company-user.entity'

// describe("Company Admin Entity", () => {
//     it("Should be able to create a Company Admin", async () => {
//         const companyAdmin = await CompanyUserEntity.create({
//             email: 'email@email.com',
//             cnpj: '12548864',
//             password: 'companyadmin123',
//             fullName: 'Company admin',
//             status: true,
//             function: 'RH'
//         })

//         expect(companyAdmin).toBeInstanceOf(CompanyUserEntity)
//         expect(companyAdmin).toHaveProperty('id')
//     })

//     it("Should not be able to create a Company Admin if email is empty", async () => {
//         expect(async () => {
//             await CompanyUserEntity.create({
//                 email: '',
//                 cnpj: '12548864',
//                 password: 'companyadmin123',
//                 fullName: 'Company admin',
//                 status: true,
//                 function: 'RH'
//             })

//         }).rejects.toThrow("Email is required")  
//     })
//     it("Should not be able to create a Company Admin if cnpj is empty", async () => {
//         expect(async () => {
//             await CompanyUserEntity.create({
//                 email: 'email@email.com',
//                 cnpj: '',
//                 password: 'companyadmin123',
//                 fullName: 'Company admin',
//                 status: true,
//                 function: 'RH'
//             })

//         }).rejects.toThrow("CNPJ is required")  
//     })
//     it("Should not be able to create a Company Admin if password is empty", async () => {
//         expect(async () => {
//             await CompanyUserEntity.create({
//                 email: 'email@email.com',
//                 cnpj: '1658156489',
//                 password: '',
//                 fullName: 'Company admin',
//                 status: true,
//                 function: 'RH'
//             })

//         }).rejects.toThrow("Password is required")  
//     })

//     it("Should not be able to create a Company Admin if name is empty", async () => {
//         expect(async () => {
//             await CompanyUserEntity.create({
//                 email: 'email@email.com',
//                 cnpj: '1658156489',
//                 password: 'ad6565651v',
//                 fullName: '',
//                 status: true,
//                 function: 'RH'
//             })

//         }).rejects.toThrow("Name is required")  
//     })

//     it("Should not be able to create a Company Admin if function is empty", async () => {
//         expect(async () => {
//             await CompanyAdminEntity.create({
//                 email: 'email@email.com',
//                 cnpj: '1658156489',
//                 password: 'ad6565651v',
//                 fullName: 'Company Admin name',
//                 status: true,
//                 function: ''
//             })

//         }).rejects.toThrow("Function is required")  
//     })
// })
=======
import { it, expect, describe } from 'vitest'
import { CompanyUserEntity } from '../company-user.entity'

describe("Company User Entity", () => {
    it("Should be able to create a Company User", async () => {
        const companyUser = await CompanyUserEntity.create({
            cnpj: '184189484',
            email: 'admin@admin.com',
            fullName: 'Company Admin',
            permissions: ['admin'],
            function: 'RH',
            client_admin: false,
            user_name: 'admin',
            password: 'admin123'
        })

        expect(companyUser).toBeInstanceOf(CompanyUserEntity)
        expect(companyUser).toHaveProperty('id')
    })

    it("Should not be able to create a Company User if email is empty", async () => {
        expect(async () => {
            await CompanyUserEntity.create({
                cnpj: '184189484',
                email: '',
                fullName: 'Company Admin',
                permissions: ['admin'],
                function: 'RH',
                client_admin: false,
                user_name: 'admin',
                password: 'admin123'
            })

        }).rejects.toThrow("Email is required")
    })
    it("Should not be able to create a Company User if cnpj is empty", async () => {
        expect(async () => {
            await CompanyUserEntity.create({
                cnpj: '',
                email: 'admin@admin.com',
                fullName: 'Company Admin',
                permissions: ['admin'],
                function: 'RH',
                client_admin: false,
                user_name: 'admin',
                password: 'admin123'
            })

        }).rejects.toThrow("CNPJ is required")
    })
    it("Should not be able to create a Company User if password is empty", async () => {
        expect(async () => {
            await CompanyUserEntity.create({
                cnpj: '184189484',
                email: 'admin@admin.com',
                fullName: 'Company Admin',
                permissions: ['admin'],
                function: 'RH',
                client_admin: false,
                user_name: 'admin',
                password: ''
            })

        }).rejects.toThrow("Password is required")
    })

    it("Should not be able to create a Company User if name is empty", async () => {
        expect(async () => {
            await CompanyUserEntity.create({
                cnpj: '184189484',
                email: 'admin@admin.com',
                fullName: '',
                permissions: ['admin'],
                function: 'RH',
                client_admin: false,
                user_name: 'admin',
                password: 'admin123'
            })

        }).rejects.toThrow("Name is required")
    })

    it("Should not be able to create a Company User if function is empty", async () => {
        expect(async () => {
            await CompanyUserEntity.create({
                cnpj: '184189484',
                email: 'admin@admin.com',
                fullName: 'Company Admin',
                permissions: ['admin'],
                function: '',
                client_admin: false,
                user_name: 'admin',
                password: 'admin123'
            })

        }).rejects.toThrow("Function is required")
    })
})
>>>>>>> correct-nodejs-backend/main
