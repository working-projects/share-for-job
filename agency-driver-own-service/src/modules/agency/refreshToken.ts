import { Resolver, Mutation, Arg } from "type-graphql";
import { verify } from "jsonwebtoken";
import { Agency } from '../../entity/Agency';
import { createAccessToken, createRefreshToken } from './sheared/authTokens';
import { getConnection } from "typeorm";
import { ADToken } from '../types/tokenType';

@Resolver()
export class RefreshTokenResolver {

    @Mutation(() => ADToken)
    async createAgencyRefreshToken(@Arg("refreshToken") token: string): Promise<ADToken> {

        if (!token) {
            throw new Error("Not Found any Token")
        }
        let payload: any = null
        
        payload = verify(token, process.env.SECRETREFRESH!)
        if (!payload) {
            throw new Error("The token Invalid")
        }
        const user = await Agency.findOne({ id: payload.userId })
        if (!user) {
            throw new Error("User not found")
        }
        if (user.tokenVersion !== payload.tokenVersion) {
           const updateTokenVersion = await getConnection().getRepository(Agency).increment({ id: payload.userId }, "tokenVersion", 1)
           if (updateTokenVersion) {
               return {
                tokenType:'Bearer',
                accessToken: await createAccessToken(user),
                refreshToken: await createRefreshToken(user)
               }
           }
            throw new Error("The token Invalid")
        }
       
        return {
            tokenType:'Bearer',
            accessToken: await createAccessToken(user),
            refreshToken: token
        }
        
    }



}