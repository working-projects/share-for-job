import { VehicleBrand } from '../../entity/VehicleBrand';
import { Resolver,UseMiddleware, Query, Arg } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { VehicleModel } from '../../entity/VehicleModel';
import { ServiceCategory } from '../../entity/ServiceCategory';
import { ServicePrice } from '../../entity/ServicePrice';
import { Vehicle } from '../../entity/Vehicle';
import { VehicleCategory } from '../../entity/VehicleCategory';
import { VehicleQualityPrice } from '../../entity/VehicleQuality';
import { getConnection } from 'typeorm';


function CreateResolver(
    suffix:string,
    entity:any,
    middleware?:Middleware<any>[]
){

    @Resolver()
    class BaseResolver{
        @Query(()=>Boolean,{name:`delete${suffix}`})
        @UseMiddleware(...(middleware || []))
        async details(@Arg("id")id:number):Promise<boolean>{
             
           const data = await getConnection()
           .createQueryBuilder()
           .delete()
           .from(entity)
           .where("id = :id", { id: id})
           .execute();
           
       if (!data) {
           throw new Error(`${suffix} Delete Did not sucessful `)
       }


            return true

        }
    }

    return BaseResolver
}

export const DeleteBrand = CreateResolver("Brand",VehicleBrand,[isAuthMiddleware])
export const DeleteModel = CreateResolver("Model",VehicleModel,[isAuthMiddleware])
export const DeleteServiceCategory = CreateResolver("ServiceCategory",ServiceCategory,[isAuthMiddleware])
export const DeleteServicePrice = CreateResolver("ServicePrice",ServicePrice,[isAuthMiddleware])
export const DeleteVehicle = CreateResolver("Vehicle",Vehicle,[isAuthMiddleware])
export const DeleteVehicleCategory = CreateResolver("VehicleCategory",VehicleCategory,[isAuthMiddleware])
export const DeleteVehicleQuality = CreateResolver("VehicleQuality",VehicleQualityPrice,[isAuthMiddleware])