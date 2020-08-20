import { Resolver, Ctx, UseMiddleware, Mutation, Arg } from "type-graphql";
import { MyContext } from '../types/MyContext';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { Driver } from '../../entity/Driver';
import { Agency } from '../../entity/Agency';
import { Status } from '../types/statusEnumType';
import { getConnection } from "typeorm";


@Resolver()
export class ReomveDriverResolver {

    @Mutation(() => Boolean)
    @UseMiddleware(isAuthMiddleware)
    async removeDriverFromAgency(@Ctx() { payload }: MyContext, @Arg("id") id: string): Promise<boolean> {
        const user = await Agency.findOne({ where: { id: payload?.userId } })

        if (user?.status === Status.PENDING) {
            throw new Error(`Not yet , your account did not allow`)
        } else if (user?.status === Status.SUSPENDED) {
            throw new Error(`Your Account Suspended, Please Contact our helpline`)
        } else if (user?.status === Status.INACTIVE) {
            throw new Error(`Your Account Inactive`)
        } else {
            const driver = await Driver.findOne({ where: { id } })
            if (!driver) throw new Error("Driver not found!");

            try {
                await getConnection().createQueryBuilder()
                    .relation(Agency, "drivers")
                    .of({ id: user?.id })
                    .remove(driver.id);
                    return true
            } catch (error) {
                return false
            }




        }

        return false
    }

}