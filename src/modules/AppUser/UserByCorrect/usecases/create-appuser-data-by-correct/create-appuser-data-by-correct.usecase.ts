import path from 'path'
import fs from 'fs'
import csv from 'csv-parser'
import { parse } from 'date-fns'
import { IAppUserRepository } from "../../repositories/app-user-data-repostory";
import { ICompanyTypeRepository } from '../../../../Company/CompanyType/repositories/company-type.repository';
import { CustomError } from '../../../../../errors/custom.error';
import { AppUserProps, AppUserDataEntity } from '../../entities/appuser-data.entity';

type AppUserRequest = {
    internal_company_code: string | null
    employee: boolean
    company_owner: boolean
    full_name: string
    gender: string
    rg: string | null
    cpf: string
    date_of_birth: Date
    user_function: string | null
    marital_status: string
    dependents_quantity: number
}

export class CreateAppUserByCorrectUsecase {
    constructor(
        private companyTypeRepository: ICompanyTypeRepository,
        private appUserRepository: IAppUserRepository
    ) { }

    async execute(csvFilePath: string, company_type_id: string, correct_admin_id: string) {

        const filePath = path.join(__dirname, '..', '..', '..', '..', '..', 'tmp', csvFilePath);
        if (!fs.existsSync(filePath)) throw new CustomError("File not found", 400);

        const findCompany = await this.companyTypeRepository.findById(company_type_id)

        if (!findCompany) throw new CustomError("Company Type must be registered", 401)

        // if (findCompany.type === 'comercio' || findCompany.type === "autonomo_comercio") throw new CustomError("Invalid Company type!", 401)
        
        return await this.readCSV(filePath, company_type_id, correct_admin_id)
        
    }

    private async readCSV(filePath: string, company_type_id: string, correct_admin_id: string){
        let results: AppUserRequest[] = [];
        let usersRegistered: AppUserRequest[] = [];
        let alreadyRegistered: string[] = [];


        return new Promise((resolve, reject) => {

            fs.createReadStream(filePath)
                .pipe(csv({ separator: ',' }))
                .on('data', async (data) => {
                    try{
                    // All csv header title must be in this condition
                    if (data['\ufeffcodigo_interno'] && data['company_owner'] && data['nome_completo'] && data['sexo'] && data['rg'] && data['cpf'] && data['data_nascimento'] && data['estado_civil'] && data['total_dependentes'] && data['cargo']) {

                        // Process CSV data
                        const internal_company_code = await data['\ufeffcodigo_interno'];
                        const employee = true;
                        const company_owner = JSON.parse(await data['company_owner']);
                        const full_name = await data['nome_completo'];
                        const gender = await data['sexo'];
                        const rg = await data['rg'];
                        const cpf = await data['cpf'];
                        const date_of_birth = parse(await data['data_nascimento'], 'dd/MM/yyyy', new Date());
                        const marital_status = await data['estado_civil'];
                        const dependents_quantity = +await data['total_dependentes'];
                        const user_function = await data['cargo']

                        const userDataFromCSV: AppUserRequest = {
                            internal_company_code,
                            employee,
                            company_owner,
                            full_name,
                            gender,
                            rg,
                            cpf,
                            date_of_birth,
                            marital_status,
                            dependents_quantity,
                            user_function


                        };

                        //if everything works fine, add all data to results Array
                        results.push(userDataFromCSV);
                    } else {
                        throw new CustomError("File must be according to model!", 400)
                    }
                }catch(err){
                    reject(err)
                }

                })
                .on('end', async () => {

                    //after adding everything, pass each user from Results array
                    for (const user of results) {
                        const data: AppUserProps = {
                            internal_company_code: user.internal_company_code,
                            employee: user.employee,
                            company_owner: user.company_owner,
                            full_name: user.full_name,
                            gender: user.gender,
                            rg: user.rg,
                            cpf: user.cpf,
                            driver_license: null,
                            date_of_birth: user.date_of_birth,
                            function: user.user_function,
                            salary: null,
                            company_type_id: company_type_id,
                            dependents_quantity: user.dependents_quantity,
                            marital_status: user.marital_status,
                            correct_admin_id: correct_admin_id,

                        }

                        const appUser = await AppUserDataEntity.create(data)

                        const findUser = await this.appUserRepository.findByCPF(user.cpf)

                        if (findUser) {
                            alreadyRegistered.push(user.cpf);


                        } else {
                            await this.appUserRepository.save(appUser)
                            usersRegistered.push(user)

                        }
                    }

                    resolve({ usersRegistered, alreadyRegistered });
                });
        });
    }
}