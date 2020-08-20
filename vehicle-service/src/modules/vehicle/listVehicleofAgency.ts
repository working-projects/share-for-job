import { Resolver, FieldResolver, Root, Query, Arg } from 'type-graphql';
import { Vehicle } from '../../entity/Vehicle';
import { VehicleImage } from './types/vehicleImage';

@Resolver()
export class ListVehicleAgencyResolver{

    @Query(()=>[Vehicle])
   async listVehicleForAgency(@Arg("agencyId")agencyId:string):Promise<Vehicle[]>{
        const datas = await Vehicle.find({where:{agencyId}})

        if (!datas) {
            throw new Error("Vehicle not found")
        }

        return datas
    }
}