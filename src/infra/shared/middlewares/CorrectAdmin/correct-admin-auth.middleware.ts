import { Request, Response, NextFunction } from "express"
import { JWTToken } from "../../crypto/token/CorrectAdmin/jwt.token"
import { CorrectAdminPrismaRepository } from "../../../../modules/CorrectAdmin/repositories/implementations/correct-admin.prisma.repository"
import { EnsureValidCorrectAdminController } from "./ensure-valid-correct-admin.controller.midleware"

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

    const correctAdminRepository = new CorrectAdminPrismaRepository()
    const ensureValidAdmin = new EnsureValidCorrectAdminController(correctAdminRepository)
    await ensureValidAdmin.handle(req, res)

    return res.status(401).json({
        error: "Authentication Error"
    })
}