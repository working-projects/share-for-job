import { ClassType, Resolver, Mutation, UseMiddleware, Arg } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { CreateResponse } from './createResponse';
import { Driver } from '../../entity/Driver';
import { Agency } from '../../entity/Agency';
import { getConnection } from "typeorm";
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { OnlineInput } from './types/updateOnlineinput';

function CreateResolver<X extends ClassType>(
    suffix: string,
    inputType: X,
    entity: any,
    middleware?: Middleware<any>[]
) {

    @Resolver()
    class BaseResolver {
        @Mutation(() => CreateResponse, { name: `updateOnline${suffix}` })
        @UseMiddleware(...(middleware || []))
        async create(@Arg("data", () => inputType) data: any): Promise<CreateResponse> {


            const user = await getConnection()
                .createQueryBuilder()
                .update(entity)
                .set({ isOnline:data.isOnline })
                .where("id = :id", { id: data.userId })
                .execute();
            if (!user) {
                throw new Error(`${suffix} data does not save`)
            }

            return {
                success: true,
                message: "Status Update Successfuly"
            }

        }
    }

    return BaseResolver
}

export const IsOnlineDriverResolver = CreateResolver("Driver",OnlineInput , Driver, [isAuthMiddleware])
export const IsOnlineusAgencyResolver = CreateResolver("Agency",OnlineInput, Agency, [isAuthMiddleware])