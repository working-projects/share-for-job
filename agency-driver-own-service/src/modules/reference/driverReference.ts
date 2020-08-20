import { getConnection } from 'typeorm';
import { Driver } from '../../entity/Driver';



export async function resolveDriverRefernce(reference:Pick<Driver,"id">):Promise<Driver> {
    console.log(reference.id); 
    const driver = await getConnection().getRepository(Driver).findOne({where:{id:reference.id}})
    console.log(driver);
    
    if (!driver) {
        throw new Error("DriverRerference id invalid ")
    }
    return driver
}