import { ClassType, Resolver,  UseMiddleware, Arg, Query } from 'type-graphql';
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { Driver } from '../../entity/Driver';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { Agency } from '../../entity/Agency';
import { DetailsAgencyResponse } from './types/detailsAgency';
import { DetailsDriverResponse } from './types/detailsDriver';


function CreateResolver<X extends ClassType>(
    suffix:string,
    retunType:X,
    entity:any,
    middleware?:Middleware<any>[]
){

    @Resolver()
    class BaseResolver{
        @Query(()=> retunType,{name:`details${suffix}`})
        @UseMiddleware(...(middleware || []))
        async listOfUser(@Arg("userId") userId:string){

            if (!userId) {
                throw new Error("user id mustn't be null")
            }

            const users = await entity.findOne({where:{id:userId}})
            if (!users) {
                throw new Error(`${suffix} data not found`)
            }

            return{
                success:true,
                message:"Save Successfuly",
                data:users
            }

        }
    }

    return BaseResolver
}

export const DetailsDriverResolver = CreateResolver("Driver",DetailsDriverResponse,Driver,[isAuthMiddleware])
export const DetailsAgencyResolver = CreateResolver("Agency",DetailsAgencyResponse,Agency,[isAuthMiddleware])