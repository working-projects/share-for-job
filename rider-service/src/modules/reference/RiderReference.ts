import { getConnection } from 'typeorm';
import { Rider } from '../../entity/Rider';

export async function resolveRatingReference(reference:Pick<Rider,"id">):Promise<Rider> {
    const rider = await getConnection().getRepository(Rider).findOne({where:{id:reference.id}})
    if (!rider) {
        throw new Error("rider reference id invalid")
    }
    return rider
}