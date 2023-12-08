import { CustomError } from "../../../../../errors/custom.error";
import { IAppUserRepository } from "../../../../AppUser/UserByCorrect/repositories/app-user-data-repostory";
import { IEmployercardRepository } from "../../../../Cards/EmployerCards/repositories/employer-card.repository";
import { ICompanyTypeRepository } from "../../../../Company/CompanyType/repositories/company-type.repository";
import { AppUserAccountsEntity, AppUserAccountsProps } from "../../entities/appUserAccounts.entity";
import { IAppUserAccountRepository } from "../../repositories/app-user-account.repository";

export class CreateAppUserOwnerAccountUsecase {
    constructor(
        private employerCardsRepository: IEmployercardRepository,
        private appUserAccountRepository: IAppUserAccountRepository
    ) { }

    async execute(companyTypeId: string, appUserAccount: AppUserAccountsEntity, app_user_id: string) {

        //if appuser is the company user, check what type of company (employer | partner | employer_partner | individual_partner)
        // const companyOwnerType = await this.companyTypeRepository.findById(companyTypeId)
        // if (!companyOwnerType) throw new CustomError("Unable to find company type associated!", 400)

        //check all available cards for this appuser
        const findAvailableCards = await this.employerCardsRepository.findByCompanyType(companyTypeId)
        if (!findAvailableCards) throw new CustomError("Unable to find available cards - Please check company type ID.", 401)

        //create arrays to save appUser info
        const newCardsActivated = []
        const cardsAlreadyRegistered = []

        for (const companyCards of findAvailableCards) {

            //check if user already has card
            const findUserCards = await this.appUserAccountRepository.findByAppUserAndEmployerCardId(app_user_id, companyCards.id)
           
           
           //If cards is still no registered, save new card and add to array
            if (!findUserCards) {
                appUserAccount.employer_cards_id = companyCards.id
                const newCard = await this.appUserAccountRepository.save(appUserAccount)

                //add new cards to newCardsActivated array
                newCardsActivated.push(newCard.EmployerCards.Cards.card_name)
            }else{

                //if it is already registered, add to array
                cardsAlreadyRegistered.push(findUserCards!.EmployerCards.Cards.card_name)
            }


        }

        return {
            cardsAlreadyRegistered,
            newCardsActivated
        }


    }
}