import { Request, Response, NextFunction } from "express"
import { CompanyAdminJWToken } from "../../crypto/token/CompanyAdmin/jwt.token"
import { CompanyUserPrismaRepository } from "../../../../modules/Company/CompanyUser/repositories/implementations/company-user.prisma.repository"
import { EnsureValidCompanyUserController } from "./ensure-valid-company-auth.controller.middleware"

export const companyIsAuth = async (req: Request, res: Response, next: NextFunction) => {

    const headerAuth = req.headers.authorization

    if (!headerAuth) return res.status(401).json({
        error: 'Token is missing'
    })

    const [, token] = headerAuth.split(" ")
    
    if (!token) return res.status(401).json({
        error: 'Token is missing'
    })


    const verifyToken = new CompanyAdminJWToken().validate(token)
    
    if (verifyToken) {
        req.companyUserId = verifyToken.sub
        

        const companyUserRepository = new CompanyUserPrismaRepository()
        const ensureValidUser = new EnsureValidCompanyUserController(companyUserRepository)
        await ensureValidUser.handle(req, res)
       
       
        return next()
    }

    return res.status(401).json({
        error: "Invalid Token"
    })

}

