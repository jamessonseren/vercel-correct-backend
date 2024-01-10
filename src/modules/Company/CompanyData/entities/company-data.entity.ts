import { randomUUID } from 'crypto'
import { CustomError } from '../../../../errors/custom.error';

<<<<<<< HEAD
type CompanyDataProps= {
    corporate_name: string;
    cnpj: string;
    cnae_id: string;
=======
type CompanyDataProps = {
    corporate_name: string;
    cnpj: string;
>>>>>>> correct-nodejs-backend/main
    classification: string;
    total_employees: number;
    phone_1: string;
    phone_2: string | null;
    company_user_id: string;
    correct_admin_id: string
}

export class CompanyDataEntity{

    id: string;
    corporate_name: string;
    cnpj: string;
<<<<<<< HEAD
    cnae_id: string;
=======
>>>>>>> correct-nodejs-backend/main
    classification: string;
    total_employees: number;
    phone_1: string;
    phone_2: string | null;
    company_user_id: string;
    correct_admin_id: string

    private constructor(props: CompanyDataProps){

<<<<<<< HEAD
        if(!props.corporate_name) throw new CustomError("Corporate name is required", 401)
        if(!props.cnpj) throw new CustomError("CBPJ is required", 401)
        if(!props.cnae_id) throw new CustomError("CNAE ID is required", 401)
        if(!props.classification) throw new CustomError("Company classification is required", 401)
        if(!props.total_employees) throw new CustomError("Total employees is required", 401)
        if(!props.phone_1) throw new CustomError("At least one telephone number is required", 401)
=======
        if(!props.corporate_name) throw new CustomError("Corporate name is required", 400)
        if(!props.cnpj) throw new CustomError("CNPJ is required", 400)
        if(!props.classification) throw new CustomError("Company classification is required", 400)
        if(!props.total_employees) throw new CustomError("Total employees is required", 400)
        if(!props.phone_1) throw new CustomError("Telephone 1 is required", 400)
>>>>>>> correct-nodejs-backend/main

        this.id = randomUUID()
        this.corporate_name = props.corporate_name
        this.cnpj = props.cnpj
<<<<<<< HEAD
        this.cnae_id = props.cnae_id
=======
>>>>>>> correct-nodejs-backend/main
        this.classification = props.classification
        this.total_employees = props.total_employees
        this.phone_1 = props.phone_1
        this.phone_2 = props.phone_2
        this.company_user_id = props.company_user_id
        this.correct_admin_id = props.correct_admin_id
        
    }

<<<<<<< HEAD
    static create(data: CompanyDataProps){
=======
    static async create(data: CompanyDataProps){
>>>>>>> correct-nodejs-backend/main
        const companyData = new CompanyDataEntity(data)
        return companyData
    }
}