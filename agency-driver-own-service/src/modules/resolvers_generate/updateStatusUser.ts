import { ClassType, Resolver, Mutation, UseMiddleware, Arg } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { CreateResponse } from './createResponse';
import { Driver } from '../../entity/Driver';
import { Agency } from '../../entity/Agency';
import { getConnection } from "typeorm";
import { StatusInput } from './types/updateStatusinput';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';

function CreateResolver<X extends ClassType>(
    suffix: string,
    inputType: X,
    entity: any,
    middleware?: Middleware<any>[]
) {

    @Resolver()
    class BaseResolver {
        @Mutation(() => CreateResponse, { name: `updateStatus${suffix}` })
        @UseMiddleware(...(middleware || []))
        async create(@Arg("data", () => inputType) data: any): Promise<CreateResponse> {


            const user = await getConnection()
                .createQueryBuilder()
                .update(entity)
                .set({ status: data.status })
                .where("id = :id", { id: data.userId })
                .execute();
            if (!user) {
                throw new Error(`${suffix} does not save`)
            }

            return {
                success: true,
                message: "Status Update Successfuly"
            }

        }
    }

    return BaseResolver
}

export const UpStatusDriverResolver = CreateResolver("Driver", StatusInput, Driver, [isAuthMiddleware])
export const UpStatusAgencyResolver = CreateResolver("Agency", StatusInput, Agency, [isAuthMiddleware])