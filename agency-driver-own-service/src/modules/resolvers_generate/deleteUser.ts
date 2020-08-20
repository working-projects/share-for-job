import { Resolver, Mutation, UseMiddleware, Arg } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { CreateResponse } from './createResponse';
import { Driver } from '../../entity/Driver';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { Agency } from '../../entity/Agency';

function CreateResolver(
    suffix: string,
    entity: any,
    middleware?: Middleware<any>[]
) {

    @Resolver()
    class BaseResolver {
        @Mutation(() => CreateResponse, { name: `delete${suffix}` })
        @UseMiddleware(...(middleware || []))
        async create(@Arg("id") id: string): Promise<CreateResponse> {

            const user = await entity.findOne({ where: { id } });
            if (!user) throw new Error("user not found!");
            await user.remove();
        
            return {
                success: true,
                message: "Delete Successfuly"
            }

        }
    }

    return BaseResolver
}

export const deleteDriver = CreateResolver("Driver", Driver, [isAuthMiddleware])
export const deleteAgency = CreateResolver("Agency", Agency, [isAuthMiddleware])