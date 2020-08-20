import { VehicleBrand } from '../../entity/VehicleBrand';
import { ClassType, Resolver, Mutation, UseMiddleware, Arg } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { CreateBrandInput } from './types/create_brand_input';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { CreateModelInput } from './types/create_model_input';
import { VehicleModel } from '../../entity/VehicleModel';
import { ServiceCategoryInput } from './types/create_scategory_input';
import { ServiceCategory } from '../../entity/ServiceCategory';
import { ServicePrice } from '../../entity/ServicePrice';
import { ServicePriceInput } from './types/create_sprice';
import { VehicleCategoryInput } from './types/create_v_category_input';
import { VehicleCategory } from '../../entity/VehicleCategory';
import { VehicleQualityPrice } from '../../entity/VehicleQuality';
import { VehicleQualityInput } from './types/create_quality';


function CreateResolver<T extends ClassType,X extends ClassType>(
    suffix:string,
    inputType:X,
    returnType:T,
    entity:any,
    middleware?:Middleware<any>[]
){

    @Resolver()
    class BaseResolver{
        @Mutation(()=> returnType,{name:`Update${suffix}`})
        @UseMiddleware(...(middleware || []))
        async update(@Arg("data",()=> inputType)data:any, @Arg("id") id:number){
            const user = await entity.findOne({where:{id}})
            if (!user) {
                throw new Error(`${suffix} Not Found`)
            }

            Object.assign(user,{...data})
            await user.save()

            return user

        }
    }

    return BaseResolver
}


export const UpdateBrand = CreateResolver("Brand",CreateBrandInput,VehicleBrand,VehicleBrand,[isAuthMiddleware])
export const UpdateModle = CreateResolver("Model",CreateModelInput,VehicleModel,VehicleModel,[isAuthMiddleware])
export const UpdateServiceCategory = CreateResolver("ServiceCategory",ServiceCategoryInput,ServiceCategory,ServiceCategory,[isAuthMiddleware])
export const UpdateServicePrice = CreateResolver("ServicePrice",ServicePriceInput,ServicePrice,ServicePrice,[isAuthMiddleware])
export const UpdateVehicleCategory = CreateResolver("VehicleCategory",VehicleCategoryInput,VehicleCategory,VehicleCategory,[isAuthMiddleware])
export const UpdateVehicleQuality = CreateResolver("VehicleQuality",VehicleQualityInput,VehicleQualityPrice,VehicleQualityPrice,[isAuthMiddleware])