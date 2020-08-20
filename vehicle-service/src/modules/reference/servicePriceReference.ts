import { getConnection } from 'typeorm';
import { ServicePrice } from '../../entity/ServicePrice';

export async function resolveServicePriceRefernce(reference:Pick<ServicePrice,"id">):Promise<ServicePrice> {
    console.log(reference.id); 
    const data = await getConnection().getRepository(ServicePrice).findOne({where:{id:reference.id}})
    console.log(data);
    
    if (!data) {
        throw new Error("ServiceCategoryRerference id invalid ")
    }
    return data
}