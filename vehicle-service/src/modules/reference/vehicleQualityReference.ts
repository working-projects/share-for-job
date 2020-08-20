import { getConnection } from 'typeorm';
import { VehicleCategory } from '../../entity/VehicleCategory';
import { VehicleQualityPrice } from '../../entity/VehicleQuality';

export async function resolveVehicleQualityRefernce(reference:Pick<VehicleQualityPrice,"id">):Promise<VehicleQualityPrice> {
    console.log(reference.id); 
    const data = await getConnection().getRepository(VehicleQualityPrice).findOne({where:{id:reference.id}})
    console.log(data);
    
    if (!data) {
        throw new Error("Vehicle Quality Rerference id invalid ")
    }
    return data
}