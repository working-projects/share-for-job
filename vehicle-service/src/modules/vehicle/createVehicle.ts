import { Resolver, Mutation, UseMiddleware, Arg, Ctx } from "type-graphql";
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { VehicleInput } from './types/vehicleInput';
import { MyContext } from '../types/MyContext';
import { Vehicle } from '../../entity/Vehicle';



@Resolver()
export class CreateVehicleResolver{


    @Mutation(()=>Boolean)
    @UseMiddleware(isAuthMiddleware)
    async addVehicle(@Arg("data"){
        name,
        carNumber,
        color,
        cc,
        mfg_year,
        seats,
        brandId,
        modelId,
        vehicleCartegoryId,
        vehicleQualityId,
        car_imgUrl,
        regCertificateUrl,
        fitnessPaperUrl,
        taxTokenUrl,
        agencyId
    

    }:VehicleInput):Promise<boolean>{
        
        const vehicle = await Vehicle.insert({
            name,
            carNumber,
            color,
            cc,
            mfg_year,
            images:{car_img:car_imgUrl, regCertificate:regCertificateUrl, fitnessPaper:fitnessPaperUrl, taxToken:taxTokenUrl},
            seats,
            brandId,
            modelId,
            vehicleCategoryId:vehicleCartegoryId,
            vehicleQualityId,
            agencyId
        })


        if (!vehicle) {
            return false
        }

        return true

    }

}