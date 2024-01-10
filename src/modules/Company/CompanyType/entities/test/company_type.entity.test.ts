<<<<<<< HEAD
// import { it, expect, describe, beforeAll} from 'vitest'
// import { CompanyTypeEntity } from '../company-type.entity'
// import { CompanyUserEntity } from '../../../CompanyUser/entities/company-user.entity'
// import { randomUUID } from 'crypto'

// describe("Company Type Entity", () => {

//     let companyAdmin:CompanyUserEntity;

//     beforeAll(async () => {
//         // Criação do admin da empresa
//         companyAdmin = {
//             id: randomUUID(),
//             email: 'email@email.com',
//             cnpj: 'comercio',
//             password: 'companyadmin123',
//             fullName: 'Company admin',
//             client_admin: false,
//             function: 'RH'
//         };

//         // Qualquer outra lógica de inicialização pode ser adicionada aqui
//     });
//     it("Should be able to select Admin Company Type", async () => {
        
//         const companyType = await CompanyTypeEntity.create({
//             type: 'comercio',
//             cnpj: 'comercio',
//             company_admin_id: companyAdmin.id
//         })

//         expect(companyType).toBeInstanceOf(CompanyTypeEntity)
//         expect(companyType).toHaveProperty('id')
//     })

//     it("Should not be able to select Admin Company Type if CNPJ is missing", async () => {
 
//         expect(async () => {
//             await CompanyTypeEntity.create({
//                 type: "comercio",
//                 cnpj: '',
//                 company_admin_id: companyAdmin.id
//             })
//         }).rejects.toThrow("CNPJ must be informed")
//     })

//     it("Should not be able to select Admin Company Type if Admin Id is missing", async () => {
 
//         expect(async () => {
//             await CompanyTypeEntity.create({
//                 type: "comercio",
//                 cnpj: 'comercio',
//                 company_admin_id:''
//             })
//         }).rejects.toThrow("User must be signed in")

//     })
// })
=======
import { it, expect, describe, beforeAll} from 'vitest'
import { CompanyTypeEntity } from '../company-type.entity'
import { CompanyUserEntity } from '../../../CompanyUser/entities/company-user.entity'
import { randomUUID } from 'crypto'

describe("Company Type Entity", () => {

    let companyUser:CompanyUserEntity;

    beforeAll(async () => {
        // Criação do admin da empresa
        companyUser = {
            id: randomUUID(),
            email: 'email@email.com',
            cnpj: 'comercio',
            permissions: ['admin'],
            user_name:'admin',
            password: 'companyadmin123',
            fullName: 'Company admin',
            client_admin: false,
            function: 'RH'
        };

        // Qualquer outra lógica de inicialização pode ser adicionada aqui
    });
    it("Should be able to select Admin Company Type", async () => {
        
        const companyType = await CompanyTypeEntity.create({
            type: 'comercio',
            cnpj: 'comercio',
            company_user_id: companyUser.id
        })

        expect(companyType).toBeInstanceOf(CompanyTypeEntity)
        expect(companyType).toHaveProperty('id')
    })

    it("Should not be able to select Admin Company Type if CNPJ is missing", async () => {
 
        expect(async () => {
            await CompanyTypeEntity.create({
                type: "comercio",
                cnpj: '',
                company_user_id: companyUser.id
            })
        }).rejects.toThrow("CNPJ must be informed")
    })

    it("Should not be able to select Admin Company Type if Admin Id is missing", async () => {
 
        expect(async () => {
            await CompanyTypeEntity.create({
                type: "comercio",
                cnpj: 'comercio',
                company_user_id:''
            })
        }).rejects.toThrow("User must be signed in")

    })
})
>>>>>>> correct-nodejs-backend/main
