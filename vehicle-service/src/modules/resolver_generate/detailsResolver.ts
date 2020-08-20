import { VehicleCategory } from './../../entity/VehicleCategory';
import { Vehicle } from './../../entity/Vehicle';
import { ServicePrice } from './../../entity/ServicePrice';
import { VehicleBrand } from '../../entity/VehicleBrand';
import { ClassType, Resolver, UseMiddleware, Query, Arg } from 'type-graphql';
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { VehicleModel } from '../../entity/VehicleModel';
import { PaginatedInput } from './types/paginateInput';
import { getConnection } from 'typeorm';
import { ServiceCategory } from '../../entity/ServiceCategory';
import { VehicleQualityPrice } from '../../entity/VehicleQuality';


function CreateResolver<X extends ClassType>(
    suffix:string,
    returnType:X,
    entity:any,
    middleware?:Middleware<any>[]
){

    @Resolver()
    class BaseResolver{
        @Query(()=>[returnType],{name:`details${suffix}`})
        @UseMiddleware(...(middleware || []))
        async list(@Arg("id")id:number){
            const data = await entity.findOne({where:{id}})

            if (!data) {
                throw new Error(`${suffix} data not found`)
            }

            return data

        }
    }

    return BaseResolver
}

export const DetailsBrand = CreateResolver("Brand",VehicleBrand,VehicleBrand,[isAuthMiddleware])
export const DetailsModel = CreateResolver("Model",VehicleModel,VehicleModel,[isAuthMiddleware])
export const DetailsServiceCategory = CreateResolver("ServiceCategory",ServiceCategory,ServiceCategory,[isAuthMiddleware])
export const DetailsServicePrice = CreateResolver("ServicePrice",ServicePrice,ServicePrice,[isAuthMiddleware])
export const DetailsVehicle = CreateResolver("Vehicle",Vehicle,Vehicle,[isAuthMiddleware])
export const DetailsVehicleCategory = CreateResolver("VehicleCategory",VehicleCategory,VehicleCategory,[isAuthMiddleware])
export const DetailsVehicleQuality = CreateResolver("VehicleQuality",VehicleQualityPrice,VehicleQualityPrice,[isAuthMiddleware])