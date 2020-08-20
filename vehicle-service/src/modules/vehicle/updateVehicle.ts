import { Resolver, Mutation, UseMiddleware, Arg } from 'type-graphql';
import { Vehicle } from '../../entity/Vehicle';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { VehicleInput } from './types/vehicleInput';


@Resolver()
export class UpdateVehicleResolver{


    @Mutation(() => Vehicle)
    @UseMiddleware(isAuthMiddleware)
    async updateVehicle(@Arg("id") id: string,@Arg("data"){
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
    }:VehicleInput ):Promise<Vehicle> {
        const vehicle = await Vehicle.findOne({ where: { id } });
            if ( !vehicle) throw new Error("driver not found!");
            Object.assign(vehicle, {
                name,
                carNumber,
                color,
                cc,
                mfg_year,
                images:{car_img:car_imgUrl, regCertificate:regCertificateUrl, fitnessPaper:fitnessPaperUrl, taxToken:taxTokenUrl},
                seats,
                brandId,
                modelId,
                vehicleCartegoryId,
                vehicleQualityId,
                agencyId
            });
            await vehicle.save();
            return vehicle;
    }



}