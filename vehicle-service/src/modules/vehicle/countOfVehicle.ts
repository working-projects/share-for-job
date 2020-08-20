import { Resolver, Query, Int, Arg } from "type-graphql";
import { Vehicle } from '../../entity/Vehicle';



@Resolver()
export class CoutOfVehicleResolver{


    @Query(()=>Int)
    async totalVehicle():Promise<number>{

        const count = await Vehicle.count()

        return count
    }
    
    @Query(()=>Int)
    async totalAgencyOfVehicle(@Arg("agencyId")agencyId:string):Promise<number>{

        const data = await Vehicle.findAndCount({where:{agencyId}})

        return data.length
    }




}