import { Request, Response, NextFunction } from "express"
import { CompanyAdminJWToken } from "../../crypto/token/CompanyAdmin/jwt.token"
import { CompanyAdminPrismaRepository } from "../../../../modules/Company/repositories/company-admin/implementations/company-admin.prisma.repository"
import { EnsureValidCompanyAdminController } from "./ensure-valid-company-auth.controller.middleware"

export const companyIsAuth = async (req: Request, res: Response, next: NextFunction) => {

    const headerAuth = req.headers.authorization

    if (!headerAuth) return res.status(401).json({
        error: 'Token is missing'
    })

    const [, token] = headerAuth.split(" ")
    console.log( { token })
    if (!token) return res.status(401).json({
        error: 'Token is missing'
    })


    const verifyToken = new CompanyAdminJWToken().validate(token)
    
    if (verifyToken) {
        req.companyAdminId = verifyToken.sub

        const companyAdminRepository = new CompanyAdminPrismaRepository()
        const ensureValidAdmin = new EnsureValidCompanyAdminController(companyAdminRepository)
        await ensureValidAdmin.handle(req, res)
       
        
        return next()
    }

    return res.status(401).json({
        error: "Invalid Token"
    })

}

