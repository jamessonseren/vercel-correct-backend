import { Request, Response } from "express";
import { ICompanyDataRepository } from "../../../../Company/CompanyData/repositories/company-data.repository";
import { ICompanyTypeRepository } from "../../../../Company/CompanyType/repositories/company-type.repository";
import { ICards } from "../../../CardsByCorrect/repositories/cards-repository";
import { IPartnerCardRepository } from "../../repositories/partner-card.repository";
import { PartnerCards } from "@prisma/client";
import { ActivatePartnerDebitCardUsecase } from "./activate-debit-card-by-correct.usecase";

export class ActivatePartnerDebitCardByCorrectController{
    constructor(
        private partnerCardRepository: IPartnerCardRepository,
        private companyTypeRepository: ICompanyTypeRepository,
        private companyDataRepository: ICompanyDataRepository,
        private cardsRepository: ICards
    ) {}
        async handle(req: Request, res: Response){
            try{

                const data: PartnerCards = req.body
                const cnpj = req.body.cnpj

                data.card_id = 'sample_card_id'
                data.total_installments = 0

                const debitCardUsecase = new ActivatePartnerDebitCardUsecase(
                    this.partnerCardRepository,
                    this.companyTypeRepository,
                    this.companyDataRepository,
                    this.cardsRepository
                )

                const debitCard = await debitCardUsecase.execute(data, cnpj)

                return res.json(debitCard)

            }catch(err: any){
                return res.status(err.statusCode).json({
                    error: err.message
                })
            }
        }
}