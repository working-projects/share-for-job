import { getConnection } from 'typeorm';
import { Agency } from '../../entity/Agency';



export async function resolveAgencyRefernce(reference:Pick<Agency,"id">):Promise<Agency> {
    console.log(reference.id); 
    const agency = await getConnection().getRepository(Agency).findOne({where:{id:reference.id}})
    console.log(agency);
    
    if (!agency) {
        throw new Error("AgencyRerference id invalid ")
    }
    return agency
}