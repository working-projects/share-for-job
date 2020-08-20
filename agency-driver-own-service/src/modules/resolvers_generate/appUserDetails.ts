import { ClassType, Resolver,  UseMiddleware, Arg, Query} from 'type-graphql';
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { Driver } from '../../entity/Driver';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { Agency } from '../../entity/Agency';
import { DetailsAgencyResponse } from './types/detailsAgency';
import { DetailsDriverResponse } from './types/detailsDriver';
import { Status } from '../types/statusEnumType';


function CreateResolver<X extends ClassType>(
    suffix:string,
    retunType:X,
    entity:any,
    middleware?:Middleware<any>[]
){

    @Resolver()
    class BaseResolver{
        @Query(()=> retunType,{name:`app_details${suffix}`})
        @UseMiddleware(...(middleware || []))
        async listOfUser(@Arg("userId") userId:string){

            if (!userId) {
                throw new Error("user id mustn't be null")
            }

            const user = await entity.findOne({where:{id:userId}})
            if (!user) {
                throw new Error(`${suffix} data not found`)
            }

            if (user.status === Status.PENDING) {
                throw new Error(`Not yet , your account are allow`)
            }else if (user.status === Status.SUSPENDED) {
                throw new Error(`Your Account Suspended, Please Contact our helpline`)
            }else if (user.status === Status.INACTIVE) {
                throw new Error(`Your Account Inactive`)
            }else{
                return{
                    success:true,
                    message:"Save Successfuly",
                    data:user
                }
            }

           

        }
    }

    return BaseResolver
}

export const ADetailsDriverResolver = CreateResolver("Driver",DetailsDriverResponse,Driver,[isAuthMiddleware])
export const ADetailsAgencyResolver = CreateResolver("Agency",DetailsAgencyResponse,Agency,[isAuthMiddleware])