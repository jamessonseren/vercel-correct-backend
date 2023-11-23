import { CustomError } from "../../../../../errors/custom.error";
import { CompanyTypeEntity, CompanyTypeProps } from "../../../entities/company-type/company-type.entity";
import { ICompanyAdminRepository } from "../../../repositories/company-admin/company-admin.repository";
import { ICompanyTypeRepository } from "../../../repositories/company-type/company-type.repository";

export class CreateCompanyTypeUsecase{

    constructor(
        private companyAdminRepository: ICompanyAdminRepository,
        private companyTypeRepository: ICompanyTypeRepository
    ){}
    async execute(data: CompanyTypeProps){
        const companyType = CompanyTypeEntity.create(data)
        //find company admin by Id
        const companyAdmin = await this.companyAdminRepository.findById(data.company_admin_id)

        if(!companyAdmin) throw new CustomError("Unable to find Company Admin", 401)
        
        //check if cnpj provided is correct
        if(companyAdmin.cnpj !== data.cnpj) throw new CustomError("CNPJ must be the same!", 401)

        const registerCompanyType = await this.companyTypeRepository.saveOrUpdate(companyType)

        return registerCompanyType


    }
}