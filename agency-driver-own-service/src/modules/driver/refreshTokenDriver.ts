import { Resolver, Mutation, Arg } from "type-graphql";
import { verify } from "jsonwebtoken";
import { getConnection } from "typeorm";
import { ADToken } from '../types/tokenType';
import { createAccessToken, createRefreshToken } from '../agency/sheared/authTokens';
import { Driver } from '../../entity/Driver';

@Resolver()
export class RefreshDriverTokenResolver {

    @Mutation(() => ADToken)
    async createDriverRefreshToken(@Arg("refreshToken") token: string): Promise<ADToken> {

        if (!token) {
            throw new Error("Not Found any Token")
        }
        let payload: any = null
        
        payload = verify(token, process.env.SECRETREFRESH!)
        if (!payload) {
            throw new Error("The token Invalid")
        }
        const user = await Driver.findOne({ id: payload.userId })
        if (!user) {
            throw new Error("User not found")
        }
        if (user.tokenVersion !== payload.tokenVersion) {
           const updateTokenVersion = await getConnection().getRepository(Driver).increment({ id: payload.userId }, "tokenVersion", 1)
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