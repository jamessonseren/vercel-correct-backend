// import { sign } from 'jsonwebtoken'
// import { verify } from 'jsonwebtoken';

// import { createHmac } from 'crypto'

// import { CompanySecondaryUserEntity } from '../../../../../modules/Company/CompanySecondaryUser/entities/company-secondary-user.entity';
// import { IcompanyUserToken, TokenCompanyUser } from "./token";

// export class CompanySecondaryUserJWTToken implements IcompanyUserToken {
//     private TOKEN_SECRET = process.env.SECRET_KEY_TOKEN_COMPANY_SECONDARY_USER || ''

//     private TOKEN_SECRET_CRYPTO = createHmac('sha256', this.TOKEN_SECRET).digest('base64')

//    create({ user_name, id }: CompanySecondaryUserEntity): string {
//         const token = sign({
//             admin: {
//                 user_name, 
//                 id    
//             }
//         }, this.TOKEN_SECRET_CRYPTO, {
//             subject: id,
//             expiresIn: '1D'
//         })

//         return token
//     }

//    validate(token: string): TokenCompanyUser | null{

//         try {
//             const tokenCompanyUser = verify(token, this.TOKEN_SECRET_CRYPTO) as TokenCompanyUser
//             return tokenCompanyUser

//         } catch (err) {
//             return null
//         }
//     }

// }