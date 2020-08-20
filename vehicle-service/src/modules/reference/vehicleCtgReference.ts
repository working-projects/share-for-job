import { getConnection } from 'typeorm';
import { ServiceCategory } from '../../entity/ServiceCategory';
import { VehicleCategory } from '../../entity/VehicleCategory';





export async function resolveVehicleCtgRefernce(reference:Pick<VehicleCategory,"id">):Promise<VehicleCategory> {
    console.log(reference.id); 
    const data = await getConnection().getRepository(VehicleCategory).findOne({where:{id:reference.id}})
    console.log(data);
    
    if (!data) {
        throw new Error("ServiceCategoryRerference id invalid ")
    }
    return data
}