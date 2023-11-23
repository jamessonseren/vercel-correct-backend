import { CustomError } from "../../../../../errors/custom.error";
import { CompanyDataEntity } from "../../../entities/company-data/company-data.entity";
import { ICompanyAdminRepository } from "../../../repositories/company-admin/company-admin.repository";
import { ICompanyDataRepository } from "../../../repositories/company_data/company-data.repository";

export type CompanyDataRequest = {
    corporate_name: string;
    cnpj: string;
    cnae_id: string;
    classification: string;
    total_employees: number;
    phone_1: string;
    phone_2: string | null;
    company_admin_id: string;
    correct_admin_id: string
}

export class CreateCompanyDataUsecase {
    constructor(
        private companyDataRepository: ICompanyDataRepository,
        private companyAdminRepository: ICompanyAdminRepository
    ) { }

    async execute(data: CompanyDataRequest) {

        const companyData = CompanyDataEntity.create(data)

        const companyAdmin = await this.companyAdminRepository.findById(data.company_admin_id)

        //check if user is authorized to carry out
        if(!companyAdmin) throw new CustomError("User is not allowed to process", 401)
        //check if cnpj informed matches from user
        if(companyAdmin!.cnpj !== data.cnpj) throw new CustomError("CNPJ must be the same from user", 401)

        const createData = await this.companyDataRepository.saveOrUpdate(companyData)

        return createData

    }
}