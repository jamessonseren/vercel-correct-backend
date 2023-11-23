import { Request, Response } from "express";
import { ICorrectAdminRepository } from "../../../../modules/CorrectAdmin/repositories/correct-admin.repository";
import { EnsureValidCorrectAdminUsecase } from "./ensure-valid-correct-admin.usecase.middlware";

export class EnsureValidCorrectAdminController{
    constructor(
        private correctAdminRepository: ICorrectAdminRepository
    ){}

    async handle(req: Request, res: Response){
        try{
            const correctAdminId = req.companyAdminId
            const validAdminUsecase = new EnsureValidCorrectAdminUsecase(
                this.correctAdminRepository
            )

            const admin = await validAdminUsecase.execute(correctAdminId)

            return admin

        }catch(err:any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}