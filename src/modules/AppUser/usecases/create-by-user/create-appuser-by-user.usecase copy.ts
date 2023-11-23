import { CustomError } from "../../../../errors/custom.error";
import { AppUserByUserEntity, IAuthAppUserProps } from "../../entities/appuser-by-user.entity";
import { IAppUserAuthRepository } from "../../repositories/AppUserAuth/app-use-auth-repository";
import { IAppUserRepository } from "../../repositories/AppUserData/app-user-data-repostory";

export class CreateAppUserByUserUsecase {

    constructor(
        private appUserAuthRepository: IAppUserAuthRepository,
        private appUserDataRepository: IAppUserRepository
    ) { }
    async execute(data: IAuthAppUserProps) {

        const appUser = await AppUserByUserEntity.create(data)

        console.time("promiseperformance")
        
        const [findAppUserByCPF, findAppUserByEmail] = await Promise.all([
            this.appUserAuthRepository.findByCPF(data.cpf),
            this.appUserAuthRepository.findByemail(data.email)
        ])
        console.timeEnd("promiseperformance")

        //check if cpf is already registered
        // const findAppUserByCPF = await this.appUserAuthRepository.findByCPF(data.cpf)
        
        //check if email is already registered
        // const findAppUserByEmail = await this.appUserAuthRepository.findByemail(data.email)
        if (findAppUserByCPF) throw new CustomError("User is already registered", 409)
        if (findAppUserByEmail) throw new CustomError("Email is already registered", 409)

        //check if user is an employee - registered by correct admin
        const employeeUser = await this.appUserDataRepository.findByCPF(data.cpf)

        // if employee exists, create user according to registers found - Includes AppUserData FK
        if (employeeUser) {
            const createRegisteredUser = await this.appUserAuthRepository.saveRegisteredUser({ ...appUser, app_user_data_id: employeeUser.id })
            return createRegisteredUser
        }

        //if It doesnt exist, create a new user
        const createNewUser = await this.appUserAuthRepository.saveNewUser(appUser)
        return createNewUser

    }
}