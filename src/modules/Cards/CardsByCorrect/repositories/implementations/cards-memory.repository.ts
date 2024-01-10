import { CardsEntity, CardsProps } from "../../entities/cards.entity";
import { ICards } from "../cards-repository";

export class CardsMemoryRepository implements ICards{
<<<<<<< HEAD

    items: CardsEntity[] = []

=======
    
    items: CardsEntity[] = []
    
>>>>>>> correct-nodejs-backend/main
    async findById(id: string): Promise<CardsEntity | null> {
        return this.items.find(card => card.id === id) || null
    }
    async findByName(name: string): Promise<CardsEntity | null> {
        return this.items.find(card => card.card_name === name) || null
    }
<<<<<<< HEAD
=======
    
    async findAllCards(): Promise<CardsEntity[] | null> {
        return this.items
    }

>>>>>>> correct-nodejs-backend/main
    async saveOrUpdate(data: CardsEntity): Promise<CardsEntity> {
        const index = this.items.findIndex(card => card.card_name == card.card_name)
        if(index >= 0){
            this.items[index] = {
                card_name: data.card_name,
                card_type: data.card_type,
                correct_admin_id: data.correct_admin_id,
                id: data.id
            }
        }else{
            this.items.push(data)
        }
        return data
    }

}