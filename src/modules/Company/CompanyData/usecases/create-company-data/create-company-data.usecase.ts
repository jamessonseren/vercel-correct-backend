import { CustomError } from "../../../../../errors/custom.error";
import { CompanyDataEntity } from "../../../CompanyData/entities/company-data.entity";
import { ICompanyUserRepository } from "../../../CompanyUser/repositories/company-user.repository";
import { ICompanyDataRepository } from "../../../CompanyData/repositories/company-data.repository";
import { ICorrectAdminRepository } from "../../../../CorrectAdmin/repositories/correct-admin.repository";

<<<<<<< HEAD
export type CompanyDataRequest = {
    corporate_name: string;
    cnpj: string;
    cnae_id: string;
    classification: string;
    total_employees: number;
    phone_1: string;
    phone_2: string | null;
    company_user_id: string;
    correct_admin_id: string
}
=======
import { CompanyDataRequest } from "../../companyDataDto/company-data.dto";
>>>>>>> correct-nodejs-backend/main

export class CreateCompanyDataUsecase {
    constructor(
        private companyDataRepository: ICompanyDataRepository,
<<<<<<< HEAD
        private companyUserRepository: ICompanyUserRepository
=======
        private companyUserRepository: ICompanyUserRepository,
        private correctAdminRepository: ICorrectAdminRepository
>>>>>>> correct-nodejs-backend/main
    ) { }

    async execute(data: CompanyDataRequest) {

<<<<<<< HEAD
       
        const companyData = CompanyDataEntity.create(data)
        
        const companyUser = await this.companyUserRepository.findById(data.company_user_id)
    
        //check if user is authorized to carry out
        if(!companyUser) throw new CustomError("User is not allowed to process", 401)

        //check if cnpj informed matches from user
        if(companyUser!.cnpj !== data.cnpj) throw new CustomError("CNPJ must be the same from user", 401)
=======
        //get correctAdmin
        const correctAdmin = await this.correctAdminRepository.findAdmin()
        if (!correctAdmin) throw new CustomError("Correct Admin not found", 400)

        data.correct_admin_id = correctAdmin.id

        const companyData = await CompanyDataEntity.create(data)

        const companyUser = await this.companyUserRepository.findById(data.company_user_id)
        
        
        //check if user is authorized to carry out
        if (!companyUser) throw new CustomError("User is not allowed to process", 401)

        //check if user already registered cnpj when signin up, if so, check if cnpj informed matches from user
        if (companyUser.cnpj) {
            if (companyUser!.cnpj !== data.cnpj) throw new CustomError("CNPJ must be the same from user", 400)

        }
>>>>>>> correct-nodejs-backend/main

        const createData = await this.companyDataRepository.saveOrUpdate(companyData)

        return createData

    }
}