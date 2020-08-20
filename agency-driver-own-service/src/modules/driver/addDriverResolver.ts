import { Resolver, Ctx, UseMiddleware, Mutation, Arg } from "type-graphql";
import { MyContext } from '../types/MyContext';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { Driver } from '../../entity/Driver';
import { Agency } from '../../entity/Agency';
import { Status } from '../types/statusEnumType';


@Resolver()
export class AddDriverResolver {

    @Mutation(() => Boolean)
    @UseMiddleware(isAuthMiddleware)
    async addDriverToAgency(@Ctx() { payload }: MyContext, @Arg("phone") phone: string): Promise<boolean> {
        const user = await Agency.findOne({ where: { id: payload?.userId } })

        if (user?.status === Status.PENDING) {
            throw new Error(`Not yet , your account did not allow`)
        } else if (user?.status === Status.SUSPENDED) {
            throw new Error(`Your Account Suspended, Please Contact our helpline`)
        } else if (user?.status === Status.INACTIVE) {
            throw new Error(`Your Account Inactive`)
        } else {
            const driver = await Driver.findOne({ where: { phoneNumber: phone } })
            if (!driver) throw new Error("Driver not found!");
            if (driver?.status === Status.PENDING) {
                throw new Error(`Not yet , your account did not allow`)
            } else if (driver?.status === Status.SUSPENDED) {
                throw new Error(`Your Account Suspended, Please Contact our helpline`)
            } else if (driver?.status === Status.INACTIVE) {
                throw new Error(`Your Account Inactive`)
            } else {
                Object.assign(driver, {
                    agencyId: user?.id
                })
                await driver.save()
                return true
            }
        }

        return false
    }

}