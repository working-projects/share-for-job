import { getConnection } from 'typeorm';
import { ServiceCategory } from '../../entity/ServiceCategory';




export async function resolveServiceCtgRefernce(reference:Pick<ServiceCategory,"id">):Promise<ServiceCategory> {
    console.log(reference.id); 
    const data = await getConnection().getRepository(ServiceCategory).findOne({where:{id:reference.id}})
    console.log(data);
    
    if (!data) {
        throw new Error("ServiceCategoryRerference id invalid ")
    }
    return data
}