import { Resolver,  FieldResolver, Root } from "type-graphql";
import { Vehicle } from '../../entity/Vehicle';
import { Agency } from "./Agency";


@Resolver(of=>Agency)
export class AgencyResolver{
    @FieldResolver(()=>[Vehicle])
    async vehicles(@Root() agency:Agency):Promise<Vehicle[]>{
        const vehicles = Vehicle.find({where:{agencyId:agency.id}})

        if (!vehicles) {
            throw new Error("Vehicles not found")
        }
        return vehicles
    }


}