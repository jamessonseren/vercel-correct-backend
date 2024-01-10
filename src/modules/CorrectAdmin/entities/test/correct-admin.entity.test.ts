import { it, expect, describe} from 'vitest'
import { CorrectAdminEntity } from '../correct-admin.entity'

describe("Correct Admin Entity", () => {
    it("Should be able to create a Correct Admin", async () => {
        const correctAdmin = await CorrectAdminEntity.create({
            email:'admin@admin.com',
            name:'Correct Admin',
            userName: 'correct_admin',
            password: 'admin123',
<<<<<<< HEAD
=======
            permissions: ['admin']
>>>>>>> correct-nodejs-backend/main
        })
    
        expect(correctAdmin).toBeInstanceOf(CorrectAdminEntity)
        expect(correctAdmin).toHaveProperty('id')
    })

    it("Should not be able to create a Correct Admin if userName is empty", async () => {
        expect(async () => {
            const correctAdmin = await CorrectAdminEntity.create({
                email:'admin@admin.com',
                name:'Correct Admin',
                userName: '',
                password: 'admin123',
<<<<<<< HEAD
=======
                permissions: ['admin']
>>>>>>> correct-nodejs-backend/main
            })

        }).rejects.toThrow("Username/password is required!")  
    })

    it("Should not be able to create a Correct Admin if password is empty", async () => {
        expect(async () => {
            const correctAdmin = await CorrectAdminEntity.create({
                email:'admin@admin.com',
                name:'Correct Admin',
                userName: 'correct_admin',
                password: '',
<<<<<<< HEAD
=======
                permissions: ['admin']
>>>>>>> correct-nodejs-backend/main
            })

        }).rejects.toThrow("Username/password is required!")  
    })

    it("Should not be able to create a Correct Admin if email is empty", async () => {
        expect(async () => {
            await CorrectAdminEntity.create({
                email:'',
                name:'Correct Admin',
                userName: 'correct_admin',
                password: 'admin123',
<<<<<<< HEAD
=======
                permissions: ['admin']
>>>>>>> correct-nodejs-backend/main
            })

        }).rejects.toThrow("Email is required!")  
    })
})

