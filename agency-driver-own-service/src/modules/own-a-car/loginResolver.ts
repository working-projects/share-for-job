import { Resolver, Arg, Mutation} from "type-graphql";
import { LoginResponse } from '../agency/sheared/loginResponse';
import { LoginAgencyInput } from '../agency/input-types/loginInput';
import { Agency } from '../../entity/Agency';
import * as bcrypt from 'bcryptjs'
import { createAccessToken, createRefreshToken } from '../agency/sheared/authTokens';
import { ADToken } from '../types/tokenType';

import { getConnection } from "typeorm";

@Resolver()
export class LoginResolver {

    @Mutation(() => LoginResponse)
    async loginOwnCar(@Arg("data") { phoneNumber, password }: LoginAgencyInput): Promise<LoginResponse> {

        const agency = await Agency.findOne({ where: { phoneNumber } })

        if (!agency) {
            throw new Error("User not Found")
        }

        const validPassword = await bcrypt.compare(password, agency.password)

        if (!validPassword) {
            throw new Error("The password doesn't match, try again!!")
        }

        if (!agency.isOwnACar) {
            throw new Error("User not Found")
        }

        const token = new ADToken()
        token.tokenType = 'Bearer'
        token.accessToken = await createAccessToken(agency)
        token.refreshToken = await createRefreshToken(agency)

        return{
            success:true,
            message:"Login sucessfuly",
            data:agency,
            token:token
        }

    }

    @Mutation(() => Boolean)
    async revokeRefreshTokenForDriver(@Arg('userId', () => String) userId: string): Promise<boolean> {
        try {
            await getConnection().getRepository(Agency).increment({ id: userId }, "tokenVersion", 1)
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
}
