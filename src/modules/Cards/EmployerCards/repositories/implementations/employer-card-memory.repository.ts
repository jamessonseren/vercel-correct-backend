<<<<<<< HEAD
import { EmployerCardsEntity, EmployerCardsProps } from "../../entities/employer-cards.entity";
import { IEmployercardRepository } from "../employer-card.repository";

export class EmployerCardsMemoryRepository implements IEmployercardRepository{

    items: EmployerCardsEntity[] = []

    async findByCardId(id: string): Promise<EmployerCardsEntity | null> {
        return this.items.find( item => item.id === id) || null
    }
    async findByCompanyType(company_type_id: string): Promise<EmployerCardsEntity | null> {
        return this.items.find(  item => item.company_type_id === company_type_id) || null
    }

    async findByContractNumber(contract_number: string): Promise<EmployerCardsEntity | null> {
        return this.items.find( item => item.contract_number === contract_number) || null
    }

    async save(data: EmployerCardsEntity): Promise<EmployerCardsEntity> {
        this.items.push(data)

        return data
    }

}
=======
// import { EmployerCardsEntity, EmployerCardsProps } from "../../entities/employer-cards.entity";
// import { IEmployercardRepository } from "../employer-card.repository";

// export class EmployerCardsMemoryRepository implements IEmployercardRepository{

//     items: EmployerCardsEntity[] = []

//     async findByCardId(id: string): Promise<EmployerCardsEntity | null> {
//         return this.items.find( item => item.id === id) || null
//     }
//     async findByCompanyType(company_type_id: string): Promise<EmployerCardsEntity | null> {
//         return this.items.find(  item => item.company_type_id === company_type_id) || null
//     }

//     async findByContractNumber(contract_number: string): Promise<EmployerCardsEntity | null> {
//         return this.items.find( item => item.contract_number === contract_number) || null
//     }

//     async save(data: EmployerCardsEntity): Promise<EmployerCardsEntity> {
//         this.items.push(data)

//         return data
//     }

// }
>>>>>>> correct-nodejs-backend/main
