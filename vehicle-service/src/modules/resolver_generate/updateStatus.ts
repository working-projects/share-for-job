import { ClassType, Resolver, Mutation, UseMiddleware, Arg } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { getConnection } from "typeorm";
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { StatusInput } from './types/statusInput';
import { VehicleBrand } from '../../entity/VehicleBrand';
import { VehicleModel } from '../../entity/VehicleModel';
import { ServiceCategory } from '../../entity/ServiceCategory';
import { ServicePrice } from '../../entity/ServicePrice';
import { Vehicle } from '../../entity/Vehicle';
import { VehicleCategory } from '../../entity/VehicleCategory';
import { VehicleQualityPrice } from '../../entity/VehicleQuality';

function CreateResolver<X extends ClassType>(
    suffix: string,
    inputType: X,
    entity: any,
    middleware?: Middleware<any>[]
) {

    @Resolver()
    class BaseResolver {
        @Mutation(() => Boolean, { name: `updateStatus${suffix}` })
        @UseMiddleware(...(middleware || []))
        async create(@Arg("data", () => inputType) data: any): Promise<boolean> {


            const user = await getConnection()
                .createQueryBuilder()
                .update(entity)
                .set({ status: data.status })
                .where("id = :id", { id: data.userId })
                .execute();
            if (!user) {
                throw new Error(`${suffix} does not save`)
            }

            return true

        }
    }

    return BaseResolver
}


export const StatusUpdateBrand = CreateResolver("Brand",StatusInput,VehicleBrand,[isAuthMiddleware])
export const StatusUpdateModel = CreateResolver("Model",StatusInput,VehicleModel,[isAuthMiddleware])
export const StatusUpdateServiceCategory = CreateResolver("ServiceCategory",StatusInput,ServiceCategory,[isAuthMiddleware])
export const StatusUpdateServicePrice = CreateResolver("ServicePrice",StatusInput,ServicePrice,[isAuthMiddleware])
export const StatusUpdateVehicle = CreateResolver("Vehicle",StatusInput,Vehicle,[isAuthMiddleware])
export const StatusUpdateVehicleCategory = CreateResolver("VehicleCategory",StatusInput,VehicleCategory,[isAuthMiddleware])
export const StatusUpdateVehicleQuality = CreateResolver("VehicleQuality",StatusInput,VehicleQualityPrice,[isAuthMiddleware])