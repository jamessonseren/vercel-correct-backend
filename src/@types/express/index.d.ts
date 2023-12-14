import * as express from 'express'

declare global {
    namespace Express {
        interface Request {
            correctAdminId: string,
            companyAdminId: string,
            companyUserID: string,
            appUserId: string
        }
    }
}