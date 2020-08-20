import { Resolver, Mutation, Arg } from "type-graphql";
import { getConnection } from "typeorm";
import { Driver } from '../../entity/Driver';


@Resolver()
export class RevokeTokenDriverResolver{
    @Mutation(() => Boolean)
    async revokeRefreshTokenForDriver(@Arg('userId', () => String) userId: string): Promise<boolean> {
        try {
            await getConnection().getRepository(Driver).increment({ id: userId }, "tokenVersion", 1)
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
}