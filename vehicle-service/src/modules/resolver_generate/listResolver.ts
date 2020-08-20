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
    suffix: string,
    returnType: X,
    entity: any,
    middleware?: Middleware<any>[]
) {

    @Resolver()
    class BaseResolver {
        @Query(() => [returnType], { name: `list${suffix}` })
        @UseMiddleware(...(middleware || []))
        async list(@Arg("data") { limit, pageNumber }: PaginatedInput) {
            const datas = await entity.find({ skip: pageNumber, take: limit, })


            if (!datas) {
                throw new Error(`${suffix} data not found`)
            }

            return datas

        }
    }

    return BaseResolver
}

export const ListAllBrand = CreateResolver("Brand", VehicleBrand, VehicleBrand, [isAuthMiddleware])
export const ListAllModel = CreateResolver("Model", VehicleModel, VehicleModel, [isAuthMiddleware])
export const ListAllServiceCategory = CreateResolver("ServiceCategory", ServiceCategory, ServiceCategory, [isAuthMiddleware])
export const ListAllServicePrice = CreateResolver("ServicePrice", ServicePrice, ServicePrice, [isAuthMiddleware])
export const ListAllVehicle = CreateResolver("Vehicle", Vehicle, Vehicle, [isAuthMiddleware])
export const ListAllVehicleCategory = CreateResolver("VehicleCategory", VehicleCategory, VehicleCategory, [isAuthMiddleware])
export const ListAllVehicleQuality = CreateResolver("VehicleQuality", VehicleQualityPrice, VehicleQualityPrice, [isAuthMiddleware])