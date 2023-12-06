import { CustomError } from "../../../../../errors/custom.error";
import { prismaClient } from "../../../../../infra/databases/prisma.config";
import { IAppUserAuthRepository } from "../../../../AppUser/AppUserManagement/repositories/app-use-auth-repository";
import { ICards } from "../../../../Cards/CardsByCorrect/repositories/cards-repository";
import { IEmployercardRepository } from "../../../../Cards/EmployerCards/repositories/employer-card.repository";
import { AppUserAccountsEntity, AppUserAccountsProps } from "../../entities/appUserAccounts.entity";
import { IAppUserAccountRepository } from "../../repositories/app-user-account.repository";

export class CreateAppUserAccountUsecase {
    constructor(
        private appUserAuthRepository: IAppUserAuthRepository,
        private cardsRepository: ICards,
        private appUserAccountRepository: IAppUserAccountRepository,
        private employerCardsRepository: IEmployercardRepository
    ) { }

    async execute(data: AppUserAccountsProps) {
        const appUserAccount = await AppUserAccountsEntity.create(data)

        //find user details
        const userDetails = await this.appUserAuthRepository.findById(data.app_user_id)
        if (!userDetails) throw new CustomError("Unable to find App User Details - Check User Id", 401)

        //check if user has some company associated
        if (userDetails.app_user_data_id === null) {
            const debitCard = await this.cardsRepository.findByName('Debito')
            if (!debitCard) throw new CustomError("Unable to find Debit Card", 400)

            const createCard = await this.appUserAccountRepository.save(appUserAccount)

            return createCard

        } else {

            //find available cards offered by employer
            const findAvailableCards = await this.employerCardsRepository.findByCompanyType(userDetails.AppUserData.company_type_id)
            if(!findAvailableCards) throw new CustomError("Unable to find available cards - Please check company type ID.", 401)

            const newCardsActivated = []
            const cardsAlreadyRegistered = []

            for (const employerCard of findAvailableCards) {

                //check if user already has card
                const findUserCards = await this.appUserAccountRepository.findByEmployerCardsId(employerCard.id)

                if (!findUserCards) {

                    appUserAccount.employer_cards_id = employerCard.id
                    const newCard = await this.appUserAccountRepository.save(appUserAccount)

                    //add new cards to newCardsActivated array
                    newCardsActivated.push(newCard.EmployerCards.Cards.card_name)

                }

                //if user already has card, add to cardsAlreadyRegistered array
                cardsAlreadyRegistered.push(findUserCards!.EmployerCards.Cards.card_name)

            }

            return {
                cardsAlreadyRegistered,
                newCardsActivated
            }

        }
    }
}