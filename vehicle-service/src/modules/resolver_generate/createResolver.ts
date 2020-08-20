import { VehicleBrand } from '../../entity/VehicleBrand';
import { ClassType, Resolver, Mutation, UseMiddleware, Arg } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { CreateBrandInput } from './types/create_brand_input';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { CreateModelInput } from './types/create_model_input';
import { VehicleModel } from '../../entity/VehicleModel';
import { ServiceCategoryInput } from './types/create_scategory_input';
import { ServiceCategory } from '../../entity/ServiceCategory';
import { ServicePriceInput } from './types/create_sprice';
import { ServicePrice } from '../../entity/ServicePrice';
import { VehicleCategoryInput } from './types/create_v_category_input';
import { VehicleCategory } from '../../entity/VehicleCategory';
import { VehicleQualityInput } from './types/create_quality';
import { VehicleQualityPrice } from '../../entity/VehicleQuality';
import { getConnection } from 'typeorm';


function CreateResolver<X extends ClassType>(
    suffix:string,
    inputType:X,
    entity:any,
    middleware?:Middleware<any>[]
){

    @Resolver()
    class BaseResolver{
        @Mutation(()=> Boolean,{name:`create${suffix}`})
        @UseMiddleware(...(middleware || []))
        async create(@Arg("data",()=> inputType)data:any){
            const user = await getConnection()
            .createQueryBuilder()
            .insert()
            .into(entity)
            .values({...data})
            .execute();
            if (!user) {
                throw new Error(`${suffix} does not save`)
            }

            return true

        }
    }

    return BaseResolver
}

export const CreateBrand = CreateResolver("Brand",CreateBrandInput,VehicleBrand,[isAuthMiddleware])
export const CreateModle = CreateResolver("Model",CreateModelInput,VehicleModel,[isAuthMiddleware])
export const CreateServiceCategory = CreateResolver("ServiceCategory",ServiceCategoryInput,ServiceCategory,[isAuthMiddleware])
export const CreateServicePrice = CreateResolver("ServicePrice",ServicePriceInput,ServicePrice,[isAuthMiddleware])
export const CreateVehicleCategory = CreateResolver("VehicleCategory",VehicleCategoryInput,VehicleCategory,[isAuthMiddleware])
export const CreateVehicleQuality = CreateResolver("VehicleQuality",VehicleQualityInput,VehicleQualityPrice,[isAuthMiddleware])