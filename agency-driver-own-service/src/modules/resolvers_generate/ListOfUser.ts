import { ClassType, Resolver,  UseMiddleware,  Query,  } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { Driver } from '../../entity/Driver';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { ListDriverResponse } from "./types/listOfDriverResponse";
import { ListAgencyResponse } from './types/listOfAgencyResponse';
import { Agency } from '../../entity/Agency';




function CreateResolver<X extends ClassType>(
    suffix:string,
    retunType:X,
    entity:any,
    middleware?:Middleware<any>[]
){

    @Resolver()
    class BaseResolver{
        @Query(()=> retunType,{name:`listAll${suffix}`})
        @UseMiddleware(...(middleware || []))
        async listOfUser(){
            const users = await entity.find()
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

export const ListOfDriverResolver = CreateResolver("Driver",ListDriverResponse,Driver,[isAuthMiddleware])
export const ListOfAgencyResolver = CreateResolver("Agency",ListAgencyResponse,Agency,[isAuthMiddleware])