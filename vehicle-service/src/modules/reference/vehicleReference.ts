import { getConnection } from 'typeorm';
import { Vehicle } from '../../entity/Vehicle';




export async function resolveVehicleRefernce(reference:Pick<Vehicle,"id">):Promise<Vehicle> {
    console.log(reference.id); 
    const vehicle = await getConnection().getRepository(Vehicle).findOne({where:{id:reference.id}})
    console.log(vehicle);
    
    if (!vehicle) {
        throw new Error("VehicleRerference id invalid ")
    }
    return vehicle
}