import { ClassType, Resolver,  UseMiddleware, Arg, Query} from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { Driver } from '../../entity/Driver';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { Agency } from '../../entity/Agency';
import { getConnection } from "typeorm";
import { PaginatedInput } from './types/paginateInput';




function CreateResolver<X extends ClassType>(
    suffix: string,
    retunType: X,
    entity: any,
    middleware?: Middleware<any>[]
) {

    @Resolver()
    class BaseResolver {
        @Query(() => [retunType], { name: `pagination${suffix}` })
        @UseMiddleware(...(middleware || []))
        async listOfUser(@Arg("data"){limit, pageNumber}:PaginatedInput) {
            const searchFormDb = await getConnection()
                .getRepository(entity)
                .createQueryBuilder("l")

            if (!searchFormDb) {
                throw new Error(`${suffix} data not found`)
            }

            return searchFormDb.take(limit).skip(pageNumber).getMany()

        }
    }

    return BaseResolver
}

export const PaginatedOfDriverResolver = CreateResolver("Driver",  Driver, [isAuthMiddleware])
export const PaginatedAgencyResolver = CreateResolver("Agency",  Agency, [isAuthMiddleware])