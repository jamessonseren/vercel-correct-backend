import { CustomError } from "../../../../errors/custom.error"
import { CorrectAdminEntity } from "../../entities/correct-admin.entity"
import { ICorrectAdminRepository } from "../../repositories/correct-admin.repository"
import { CorrectAdminPrismaRepository } from "../../repositories/implementations/correct-admin.prisma.repository"

type CorrectAdminRequest = {
    name: string
    email: string
    userName: string
    password: string
}

export class CreateCorrectAdminUseCase{
    constructor(
        private adminRepository: ICorrectAdminRepository
    ){}
    
    async execute(data: CorrectAdminRequest){
        const admin = await CorrectAdminEntity.create(data)

        const correctAdminRepository = new CorrectAdminPrismaRepository()

        const adminExists = await correctAdminRepository.findByUserName(data.userName)

        if(adminExists) throw new CustomError("UserName already exists", 400, "ERROR")

        const createAdmin = await this.adminRepository.save(admin)

        return createAdmin
    }
}