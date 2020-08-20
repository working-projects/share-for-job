import { Resolver, FieldResolver, Root } from "type-graphql";
import { Vehicle } from '../../entity/Vehicle';
import { VehicleImage } from './types/vehicleImage';

@Resolver(of=>Vehicle)
export class ImagesVehicleResolver{

    @FieldResolver(()=>VehicleImage)
   async images(@Root() vehicle:Vehicle):Promise<VehicleImage>{
        const urls = new VehicleImage()
        urls.car_img = vehicle.images.car_img
        urls.regCertificate = vehicle.images.regCertificate
        urls.fitnessPaper = vehicle.images.fitnessPaper
        urls.taxToken = vehicle.images.taxToken

        return urls
    }
}