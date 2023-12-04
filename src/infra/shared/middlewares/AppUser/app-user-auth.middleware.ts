import { Request, Response, NextFunction } from "express"
import { JWTToken } from "../../crypto/token/CorrectAdmin/jwt.token"
import { AppUserAuthPrismaRepository } from "../../../../modules/AppUser/repositories/AppUserAuth/implementations/app-user-auth-prisma.repository"
import { EnsureValidAppUserController } from "./ensure-valid-app-user.controller.middlware"

export const correctIsAuth = async (req: Request, res: Response, next: NextFunction) => {

    const headerAuth = req.headers.authorization

    if (!headerAuth) return res.status(401).json({
        error: 'Token is missing'
    })

    const [, token] = headerAuth.split(" ")

    if (!token) return res.status(401).json({
        error: 'Token is missing'
    })

    const verifyToken = new JWTToken().validate(token)

    if (verifyToken) {
        req.correctAdminId = verifyToken.sub
        return next()
    }

    const appUserAuthRepository = new AppUserAuthPrismaRepository()
    const ensureValidAAppUser = new EnsureValidAppUserController(appUserAuthRepository)
    await ensureValidAAppUser.handle(req, res)

    return res.status(401).json({
        error: "Authentication Error"
    })
}