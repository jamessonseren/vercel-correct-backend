import { CustomError } from "../../../../../errors/custom.error";
import { ICompanyTypeRepository } from "../../../../Company/CompanyType/repositories/company-type.repository";
import { IAppUserRepository } from "../../../UserByCorrect/repositories/app-user-data-repostory";
import { AppUserByUserEntity, IAuthAppUserProps } from "../../entities/create-user-by-user/appuser-by-user.entity";
import { IAppUserAuthRepository } from "../../repositories/app-use-auth-repository";

export class CreateAppUserByUserUsecase {

    constructor(
        private appUserAuthRepository: IAppUserAuthRepository,
        private appUserDataRepository: IAppUserRepository,
    ) { }
    async execute(data: IAuthAppUserProps) {
        const appUser = await AppUserByUserEntity.create(data)
        
<<<<<<< HEAD
=======
        console.log({appUser})
>>>>>>> correct-nodejs-backend/main
        //check if cpf is already registered
        const findAppUserByCPF = await this.appUserAuthRepository.findByCPF(data.cpf)
        if (findAppUserByCPF) throw new CustomError("User is already registered", 409)

<<<<<<< HEAD
        console.log({findAppUserByCPF})
=======
        
>>>>>>> correct-nodejs-backend/main

        //check if email is already registered
        const findAppUserByEmail = await this.appUserAuthRepository.findByemail(data.email)
        if (findAppUserByEmail) throw new CustomError("Email is already registered", 409)

        //check if user is an employee - registered by correct admin
        const employeeUser = await this.appUserDataRepository.findByCPFEmployee(data.cpf)

        // if employee exists, create user according to registers found - Includes AppUserData FK
        if (employeeUser) {

            const createRegisteredUser = await this.appUserAuthRepository.saveRegisteredUser(appUser)
            return createRegisteredUser


        }

        //if It doesnt exist, create a new user
        const createNewUser = await this.appUserAuthRepository.saveNewUser(appUser)
        return createNewUser

    }
}