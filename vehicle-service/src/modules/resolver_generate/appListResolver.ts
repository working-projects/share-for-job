import { VehicleBrand } from '../../entity/VehicleBrand';
import { ClassType, Resolver,UseMiddleware, Query } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { VehicleModel } from '../../entity/VehicleModel';
import { Status } from '../types/statusEnumType';


function CreateResolver<X extends ClassType>(
    suffix:string,
    returnType:X,
    entity:any,
    middleware?:Middleware<any>[]
){

    @Resolver()
    class BaseResolver{
        @Query(()=>[returnType],{name:`appList${suffix}`})
        @UseMiddleware(...(middleware || []))
        async applist(){
            const datas = await entity.find()
            if (!datas) {
                throw new Error(`${suffix} not found `)
            }

            const values = await datas?.map((data: { status:Status; }) => data.status === 'ACTIVE')

            return values

        }
    }

    return BaseResolver
}

export const AppListAllBrand = CreateResolver("Brand",VehicleBrand,VehicleBrand,[isAuthMiddleware])
export const AppListAllModle = CreateResolver("Model",VehicleModel,VehicleModel,[isAuthMiddleware])